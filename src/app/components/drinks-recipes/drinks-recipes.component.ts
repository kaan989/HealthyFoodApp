import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Models/Recipe.Model';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drinks-recipes',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule],
  templateUrl: './drinks-recipes.component.html',
  styleUrl: './drinks-recipes.component.css'
})
export class DrinksRecipesComponent implements OnInit {
  isAdmin:boolean=false;
  isAuthenticated = false;
  recipes: Recipe[] = [];
  error: string | null = null;
  p: number = 1; // Başlangıç sayfası

  constructor(private recipeService: RecipeService, private router: Router, private authService: AuthService) { }



ngOnInit(): void {
  this.loadRecipesByCategory(3); // Belirli kategori ID'si
  this.isAuthenticated = this.authService.isAuthenticated();
  this.isAdmin = this.authService.getUserRole() === 'admin';
}

loadRecipesByCategory(categoryId: number): void {
  this.recipeService.getRecipesByCategory(categoryId).subscribe(
    data => this.recipes = data,
    error => this.error = 'Error fetching recipes: ' + error.message
  );
}
  
  onDelete(recipeId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.recipeService.deleteRecipe(recipeId).subscribe(
          () => {
            Swal.fire(
              'Deleted!',
              'Your recipe has been deleted.',
              'success'
            );
            this.loadRecipesByCategory(3);; // Silme işlemi başarılı olduktan sonra listeyi güncelleyin
          },
          error => {
            Swal.fire(
              'Error!',
              'There was an error deleting the recipe.',
              'error'
            );
          }
        );
      }
    });
  }

  onAddRecipe(): void {
    if (!this.isAuthenticated) {
      Swal.fire('Error!', 'You must be logged in to add a recipe.', 'error');
      return;
    }
    this.router.navigate(['/addrecipe']);
  }

  viewRecipe(recipeId: number): void {
    this.router.navigate(['/recipe-detail', recipeId]);
  }
}