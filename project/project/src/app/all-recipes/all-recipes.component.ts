import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/classes/Recipe';
import { User } from 'src/classes/user';
import { Router } from '@angular/router';
import { Category } from 'src/classes/Category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  
  addRecipe(){this.router.navigate(["addRecipe"])}
  constructor(public ser:RecipeService,public router:Router,public catSer:CategoryService) { }
  arr:Recipe[];
  categoryArr:Category;
  exist;
  level="";
  time=0;
  cate="";
  result;
  user;
  showuser:string;
  ezerarr:Recipe[]=[];
  ngOnInit() {
    this.catSer.getallcategories().subscribe(suc=>this.categoryArr=suc);
    this.ser.getallrecipe().subscribe(suc=>this.arr=suc);
    if(sessionStorage.getItem('user_name')==undefined)
    this.exist=false;
    else
    {this.exist=true;
      this.showuser='משתמש'+sessionStorage.getItem('user_name');}
  }
  getRecipe()
  {var i;
    this.ezerarr=[]; 
    this.ser.getallrecipe().subscribe(suc=>{
      this.arr=suc;
    for(i=0;i<this.arr.length;i++)
    {
      if((this.arr[i].recipeName.indexOf(this.level)>-1|| this.level=="")&&
      (this.arr[i].categotyRecipe.name==this.cate||this.cate=="")&&
      (this.arr[i].makingTime<=this.time||this.time==0))
        this.ezerarr.push(this.arr[i]);
    }
    this.arr=this.ezerarr;
    if(this.arr.length<=0)
    {this.result="לא נמצאו תוצאות";}
    else
    {this.result="";}
    });

  }
  clean(){
    this.level="";
    this.time=0;
    this.cate="";
    this.getRecipe();
  }
}
