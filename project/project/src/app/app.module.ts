import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { NotFfoudComponent } from './not-ffoud/not-ffoud.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { HighLightDirective } from './high-light.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformComponent } from './inform/inform.component';
import { LogoutComponent } from './logout/logout.component';
import { MinitPipe } from './pipe/time';
import { difficultyPipe } from './pipe/difficult';

@NgModule({
  declarations: [
    AppComponent,
    AllRecipesComponent,
    NotFfoudComponent,
    LoginComponent,
    RegisterComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    HighLightDirective,
    InformComponent,
    LogoutComponent,
    MinitPipe,
    difficultyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
