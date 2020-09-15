import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/classes/Recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  myarr:Recipe;
  link="";
  constructor() { }
  ngOnInit() {
    if(sessionStorage.getItem('user_name'))
    this.link="/inform/"+this.myarr.recipeName;
else
{this.link="/all";
}
  }
  
  check(){
    if(sessionStorage.getItem('user_name'))
        this.link="/inform/"+this.myarr.recipeName;
    else
    {this.link="/all";
    alert("אינך רשום למערכת")
  }
  }
}
