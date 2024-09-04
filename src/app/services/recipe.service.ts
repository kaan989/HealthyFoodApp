import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Recipe } from '../Models/Recipe.Model';
import { Category } from '../Models/Category.Model';
import { RecipeDto } from '../Models/RecipeDto.Model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = "https://localhost:7046/api/Recipe";
  private baseapiUrl = 'https://localhost:7046/api/Category/recipe';

  constructor(private http:HttpClient) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.apiUrl);
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:7046/api/Category');  // Kategori listesini almak için
  }

  addRecipe(recipe: RecipeDto, catId: number): Observable<any> {
    const url = `${this.apiUrl}?catId=${catId}`;
    return this.http.post(url, recipe, { responseType: 'text' });
  }
  

  deleteRecipe(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  getRecipesByCategory(categoryId: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.baseapiUrl}/${categoryId}`);
  }
  searchRecipesByTitle(title: string): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiUrl}/search?title=${title}`);
  }
}
