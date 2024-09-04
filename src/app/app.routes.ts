import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AllrecipeComponent } from './components/allrecipe/allrecipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { DinnerRecipesComponent } from './components/dinner-recipes/dinner-recipes.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DessertRecipesComponent } from './components/dessert-recipes/dessert-recipes.component';
import { DrinksRecipesComponent } from './components/drinks-recipes/drinks-recipes.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';





export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "allrecipe",
        component: AllrecipeComponent
    },
      {
        path: "",
        component: LoginComponent
      },
      {
        path: "addrecipe",
        component : AddRecipeComponent
      },
      { path: 'recipe-detail/:id', component: RecipeDetailComponent },
      {path: "dinner-recipes", component: DinnerRecipesComponent},
      {path: "home", component: HomepageComponent},
      {path: "dessert-recipes", component: DessertRecipesComponent},
      {path:"drinks-recipes", component: DrinksRecipesComponent},
      {path:"about", component:AboutUsComponent},
      {path: "services", component:ServicesComponent},
      {path: "contact", component:ContactComponent},
      {path:"privacy" , component:PrivacyPolicyComponent},
      
      {
        path: "**",
        component: AllrecipeComponent
      },

   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
