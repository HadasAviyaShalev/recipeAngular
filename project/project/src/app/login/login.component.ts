import { Component, OnInit } from '@angular/core';
import { User } from 'src/classes/user';
import { UserService } from '../user.service';
import { RouterLink, Router } from '@angular/router';
import { Key } from 'protractor';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public ser:UserService,public router:Router) { }
  u:User=new User;
  result:User;
  exist;
  login;
  ngOnInit() {
    this.login=new FormGroup({
      name:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    });
if(sessionStorage.getItem('user_name'))
  {
    this.exist=true;
  }
else
  this.exist=false;
  }
  findUser()
  {
   this.ser.checkUser(this.u).subscribe(suc=>{this.result=suc; 
    if(this.result==true){this.router.navigate(["all"]); sessionStorage.setItem('user_name',this.u.name);sessionStorage.setItem('user_code',this.u.password);}
    else if(this.result==false){alert("אינך קיים במערכת");this.router.navigate(["register"]);}
    else alert("הסיסמה שגויה");});
  }

}
