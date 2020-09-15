import { Component, OnInit, SimpleChange, OnChanges } from '@angular/core';
import {SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  /*onStorageChange(event:StorageEvent) {
   this.user='משתמש'+sessionStorage.getItem('user_name');
    if(sessionStorage.getItem('user_name')=="")
    this.cls='yes';
    else
    this.cls='no';
  }*/
  title = 'project';
  cls:string='yes';
  user:string;

  ngOnInit() {
   /* if(sessionStorage.getItem('user_name'))
    this.user='משתמש'+sessionStorage.getItem('user_name');
    else
    this.cls='no';*/
    }

    
    

}
