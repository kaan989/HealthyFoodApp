import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { routes } from './app.routes';
import { RecipeService } from './services/recipe.service';
import { AllrecipeComponent } from './components/allrecipe/allrecipe.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from "./components/footer/footer.component";
import { NgxPaginationModule } from 'ngx-pagination';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, NavbarComponent, AllrecipeComponent, LoginComponent,
     FooterComponent, FooterComponent, RouterModule, ReactiveFormsModule,NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HealthyFoodApp';
}
