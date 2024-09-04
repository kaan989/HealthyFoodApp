import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../Models/Category.Model';
import { CommonModule } from '@angular/common';
import { RecipeDto } from '../../Models/RecipeDto.Model';
import { Router } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,NgSelectModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  categories: Category[] = [];

  constructor(private fb: FormBuilder, private recipeService: RecipeService,private router: Router) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      image: ['', Validators.required],
      categoryIds: [[], Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.recipeService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit(): void {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;
      const recipeDto: RecipeDto = {
        id: 0, // Typically set by the server
        title: formValue.title,
        description: formValue.description,
        ingredients: formValue.ingredients,
        instructions: formValue.instructions,
        image: formValue.image,
        createdAt: new Date()
      };

      const categoryIds = formValue.categoryIds; // Get the selected category IDs

      this.recipeService.addRecipe(recipeDto, categoryIds).subscribe(
        response => {
          Swal.fire({
            title: 'Başarıyla Eklendi!',
            text: 'Tarif başarıyla eklendi.',
            icon: 'success',
            confirmButtonText: 'Tamam'
          }).then(() => {
            this.recipeForm.reset(); // Formu sıfırlama
            this.router.navigate(['/addrecipe']); // Yönlendirme
          });
        },
        error => {
          Swal.fire({
            title: 'Hata!',
            text: 'Tarif eklenirken bir hata oluştu.',
            icon: 'error',
            confirmButtonText: 'Tamam'
          });
          console.error('Error adding recipe', error);
        }
      );
    }
  }
}