import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from 'src/classes/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
constructor(public httpItem:HttpClient) { }
  adduser(u:User)
  {return this.httpItem.post<any>("http://localhost:64596/api/user/addUser",u);}

  showUser()
  {return this.httpItem.get<User[]>("http://localhost:64596/api/user/getAllUsers");}

  checkUser(u:User)
  {return this.httpItem.post<User>("http://localhost:64596/api/user/findUser",u);}
}
