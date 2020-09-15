import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/classes/Recipe';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/classes/user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public ser:UserService,public router:Router) { }
  form;
  u:User=new User();
  result:string;
  arr:User[];
  ngOnInit() {
    this.form=new FormGroup({
      code:new FormControl(""),
      name:new FormControl("",Validators.required),
      address:new FormControl(""),
      mail:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password:new FormControl("",Validators.required),
    });
  }
  showUser()
  {
    this.ser.showUser().subscribe(suc=>this.arr=suc);
  }
  adduser()
  {
   this.ser.adduser(this.u).subscribe(suc=>{this.result=suc; alert(this.result);this.router.navigate(["all"]);},err=>{this.result=err; alert(this.result);});
   

  }
}
