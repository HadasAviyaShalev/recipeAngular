import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/classes/Recipe';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.css']
})
export class InformComponent implements OnInit {
  constructor(public active:ActivatedRoute, public ser:RecipeService,public router:Router) { }

  r:Recipe;
  name;
  firstName;
  exist;
  showuser:string;
  ngOnInit() {
    this.showuser='משתמש:'+sessionStorage.getItem('user_name');
    this.active.params.subscribe(suc=>{
      this.name=suc["recipeName"];

      this.ser.getrecipedetails(this.name).subscribe(suc=>{this.r=suc; this.firstName=suc["User"].name;this.ifexist();console.log(this.r)})
    })

  }
  editRecipe(){this.router.navigate(["editRecipe"]); sessionStorage.setItem('recipe',this.name)}
  ifexist()
  {    if(this.firstName== sessionStorage.getItem('user_name'.toString()))
  this.exist=true;
  else
  this.exist=false;}
  
}
