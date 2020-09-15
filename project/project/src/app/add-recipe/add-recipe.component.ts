import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Category } from 'src/classes/Category';
import { UserService } from '../user.service';
import { RouterLink, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { Recipe } from 'src/classes/Recipe';
import { NgModule } from '@angular/core';
import { FormsModule, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { findStaticQueryIds, findNode } from '@angular/compiler';
import { User } from 'src/classes/user';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(public ser:CategoryService,public recipeSer:RecipeService,public userser:UserService,public router:Router) { }
  categoryArr:Category;
  r:Recipe = new Recipe();
  result:string;
  level;
  u:User=new User();
  productParents;
  add;
  showuser:string;
  picture;
  ngOnInit() {
    this.add=new FormGroup({
      fname:new FormControl("", Validators.compose([Validators.required,Validators.pattern('[a-zA-Zא-ת ]*')])),
      time:new FormControl("",Validators.pattern('[0-9]*')),
      level:new FormControl(""),
      category:new FormControl("",Validators.required)
    });
    this.ser.getallcategories().subscribe(suc=>this.categoryArr=suc);
    this.r.ingridience=[];
    this.r.makingMethod=[];
    this.r.categotyRecipe=new Category();
    this.r.ingridience.push("");
    this.r.makingMethod.push("");
    this.u.name=sessionStorage.getItem('user_name'.toString());
    this.u.password=sessionStorage.getItem('user_code'.toString());
    this.r.user=this.u;
    this.showuser='משתמש:'+sessionStorage.getItem('user_name'.toString());
    }
    addRecipe(){
      console.log(this.add.value);
      if(this.r.picture!=undefined)
      {this.r.picture="/pictures/"+this.r.picture.slice(12);}
      else{
        this.r.picture="/pictures/אין תמונה.png"
      }
      this.r.ingridience.pop();
      this.r.makingMethod.pop();
      this.r.status=true;
      this.recipeSer.addRecipe(this.r).subscribe(suc=>{alert(suc);this.router.navigate(["/all"]);},err=>this.result=err);


    }
   onSelectionChange(value){
        this.r.level=value;
    }
    findCategory()
    { 
        this.ser.findCategory(this.r.categotyRecipe).subscribe(suc=>this.r.categotyRecipe=suc,err=>alert(err));
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
  trackByFn(index: any, item: any) {
    return index;
 }
}
