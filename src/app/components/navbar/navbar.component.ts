import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from '../../services/navbar.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../Models/Recipe.Model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  isAuthenticated: boolean =false;
  searchTitle: string = '';
  searchResults: Recipe[] = [];
  showNavbar: boolean = true;
  isLoggedIn: boolean = false; // Yeni bir özellik ekleyin
  subscription: Subscription;

  constructor(
    private navbarService: NavbarService,
    private authService: AuthService,
    private router: Router,
    private recipeService: RecipeService
  ) {
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    });

    this.isAuthenticated = this.authService.isAuthenticated();
    // Oturum açma durumunu kontrol edin
  }
 

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout().subscribe({
      next: (response) => {
        console.log('Logout successful:', response);
        this.router.navigate(['login']);
        this.isLoggedIn = false; // Oturum kapandıktan sonra bu özelliği güncelleyin
      },
      error: (error) => {
        console.error('Logout failed:', error);
        alert('Logout failed. Please try again.');
      }
    });
  }

  onAllRecipe(): void {
    this.router.navigate(['/allrecipe']);
  }

  onDinnerRecipes(): void {
    this.router.navigate(['/dinner-recipes']);
  }

  onDessertRecipes(): void {
    this.router.navigate(['/dessert-recipes']);
  }

  onHome(): void {
    this.router.navigate(['/home']);
  }

  onDrinks(): void {
    this.router.navigate(['/drinks-recipes']);
  }
}
