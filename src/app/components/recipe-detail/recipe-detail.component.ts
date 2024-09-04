import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Models/Recipe.Model';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [RecipeDetailComponent,CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.loadRecipe();
  }

  loadRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(+id).subscribe(
        data => this.recipe = data,
        error => this.error = 'Error fetching recipe details: ' + error.message
      );
    } else {
      this.error = 'Recipe ID is missing';
    }
  }

  goBack(): void {
    window.history.back();
  }
}