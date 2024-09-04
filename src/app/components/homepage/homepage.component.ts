import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../Models/Recipe.Model';
import { RecipeService } from '../../services/recipe.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppUser } from '../../Models/AppUser.Model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  isAuthenticated: boolean = false;
  currentUser: AppUser | null = null;
  recommendedRecipes: Recipe[] = [];
  healthBenefits = [
    'Improves overall health and well-being',
    'Helps maintain a healthy weight',
    'Boosts energy levels and mental clarity',
    'Supports immune system function',
    'Promotes healthy aging and longevity',
    'Reduces risk of chronic diseases',
    'Improves digestion and gut health',
    'Enhances skin health and appearance',
    'Strengthens bones and joints',
    'Supports cardiovascular health',
    'Boosts mood and mental health',
    'Increases physical fitness and stamina',
    'Aids in better sleep quality',
    'Improves brain function and memory',
    'Enhances overall quality of life'
  ];
  

  constructor(private recipeService: RecipeService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadRecommendedRecipes();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  loadRecommendedRecipes(): void {
    this.recipeService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recommendedRecipes = this.getRandomRecipes(recipes, 3);
    });
  }

  getRandomRecipes(recipes: Recipe[], count: number): Recipe[] {
    const shuffled = recipes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
