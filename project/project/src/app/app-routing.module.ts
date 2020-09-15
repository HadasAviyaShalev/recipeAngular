import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { NotFfoudComponent } from './not-ffoud/not-ffoud.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { InformComponent } from './inform/inform.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogoutComponent } from './logout/logout.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"all",component:AllRecipesComponent},
  {path:"register",component:RegisterComponent},
  {path:"editRecipe",component:EditRecipeComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},
  {path:"addRecipe",component:AddRecipeComponent},
  {path:"inform/:recipeName",component:InformComponent},
  {path:"details",component:RecipeDetailsComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"**",component:NotFfoudComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
