import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/classes/Recipe';
import { NgModule } from '@angular/core';
import { FormsModule,FormArray, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { Category } from 'src/classes/Category';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  constructor(public active:ActivatedRoute,public ser:CategoryService,public recipeSer:RecipeService,public router:Router) { }
  categoryArr:Category;
  r:Recipe = new Recipe();
  name;
  result;
  productParents;
  picture;
  radioSelected;
  nav;
  edit;
  showuser:string;
  ngOnInit() {
    this.edit=new FormGroup({
      time:new FormControl("",Validators.pattern('[0-9]*')),
      //level:new FormControl(""),
      category:new FormControl("",Validators.required)
    });
    this.radioSelected="1";
    this.ser.getallcategories().subscribe(suc=>this.categoryArr=suc);
      this.name=sessionStorage.getItem('recipe');
      this.getRecipeDetails(this.name);   
      this.showuser='משתמש'+sessionStorage.getItem('user_name');
  }
  getRecipeDetails(name:string){
    this.recipeSer.getrecipedetails(this.name).subscribe(suc=>{this.r=suc;
      if(this.r.ingridience.length==0)
      {

        this.r.ingridience=[];
        
      }
      this.r.ingridience.push("");
      if(this.r.makingMethod.length==0)
      {
        this.r.makingMethod=[];
        
      }this.r.makingMethod.push("");
      this.picture=this.r.picture;
      this.radioSelected=this.r.level.toString();
     // this.edit.controls['level'].setValue(this.r.level);
      this.edit.controls['time'].setValue(this.r.makingTime);
      this.edit.controls['category'].setValue(this.r.categotyRecipe.name);
    }
      )
  }
  onSelectionChange(value){
    this.r.level=value;
}
addRowIngridience(i){
if(this.r.ingridience[i+1]==undefined)
  this.r.ingridience.push("");
  if(this.r.ingridience[i+1]!=undefined&&this.r.ingridience[i]=="")
  {for(var j =i; j<this.r.ingridience.length-1; j++)
      this.r.ingridience[j]=this.r.ingridience[j+1]
  this.r.ingridience.pop();}
}
addRowMaking(i){
  if(this.r.makingMethod[i+1]==undefined)
  this.r.makingMethod.push("");
  if(this.r.makingMethod[i+1]!=undefined&&this.r.makingMethod[i]=="")
  {for(var j =i; j<this.r.makingMethod.length-1; j++)
      this.r.makingMethod[j]=this.r.makingMethod[j+1]
  this.r.makingMethod.pop();}
}
editRecipe()
{
  console.log(this.r);
 // this.r.level=this.edit.controls['level'].value ;
  this.r.makingTime=this.edit.controls['time'].value;
  console.log(this.r);
  if(this.picture!=this.r.picture)
  this.r.picture="/pictures/"+this.r.picture.slice(12);
  this.r.makingMethod.pop();
  this.r.ingridience.pop();
  this.recipeSer.EditRecipe(this.r).subscribe(suc=>{ alert(suc);  this.nav="/inform/"+this.name;
  this.router.navigate([this.nav]);},err=>alert(err));

}
c:Category=new Category();
findCategory()
{  
  this.c.name=this.edit.controls['category'].value;
    this.ser.findCategory(this.c).subscribe(suc=>this.r.categotyRecipe=suc,err=>alert(err));
}
trackByFn(index: any, item: any) {
  return index;
}
reset()
{
  this.nav="/inform/"+this.name;
  this.router.navigate([this.nav]);
}
}
