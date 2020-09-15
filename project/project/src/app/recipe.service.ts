import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/classes/user';
import { Recipe } from 'src/classes/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public httpItem:HttpClient) { }
  getallrecipe()
  {
    return this.httpItem.get<any>("http://localhost:64596/api/recipe/getAllRecipe");
  }
 getrecipedetails(r:string)
 {
   return this.httpItem.get<Recipe>("http://localhost:64596/api/recipe/getRecipeDetails?name="+r);
 }
 addRecipe(r:Recipe)
 {
   return this.httpItem.post<any>("http://localhost:64596/api/recipe/addRecipe",r);
 }
 EditRecipe(r:Recipe){
   return this.httpItem.post<any>("http://localhost:64596/api/recipe/editRecipe",r);
 }
}
