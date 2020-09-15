import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public httpItem:HttpClient) { }
  getallcategories()
  {
    return this.httpItem.get<any>("http://localhost:64596/api/category/getAllCategory");
  }
  findCategory(name:Category)
  {
    return this.httpItem.post<any>("http://localhost:64596/api/category/FindCategory",name);
  }
}
