import { Category } from './Category';
import { User } from './user';

export class Recipe{
    constructor(public recipeName?:string,public categotyRecipe?:Category,public makingTime?:number,public level?:number,public ingridience?:string[],
        public makingMethod?:string[],public user?:User, public picture?:string,public status?:boolean,public date?:Date ){}
}