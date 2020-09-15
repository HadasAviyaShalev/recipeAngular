import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public ser:UserService, public router:Router) { }
goout=false;
in=false;
  ngOnInit() {
      if(sessionStorage.getItem('user_name'))
      this.goout=true;
      else
      this.in=true;
  }
  out()
  {
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('user_code');
    this.router.navigate(["login"]);
  }
  no()
  {
    this.router.navigate(["all"]);
  }

}
