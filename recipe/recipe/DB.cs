using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using recipe.Models;

namespace recipe
{
    public class DB
    {
        public static List<user> userList { get;set;}
        public static List<category> categoryList { get; set; }
        public static List<recipes> recipeList { get; set; }
        static DB()
        {
            userList = new List<user>() { new user() {name="hadas", code=123,address="ezra",mail="hshalev5@gmail.com",password="1091" },
            new user() {name="esther", code=456,address="shaul",mail="esther.shalti@gmail.com",password="2323" },
            new user() {name="yael", code=789,address="cfarsaba",mail="yaelbengi@gmail.com",password="3434" }};

            categoryList = new List<category>() { new category() { code=145,name="cook",cIcon="notfound"},
            new category() { code=009,name="bake",cIcon="notfound"},
            new category() { code=564,name="cakes",cIcon="notfound"} };

            recipeList = new List<recipes>() { new recipes() { recipeName = "chocolateCake", categotyRecipe = categoryList[0], makingTime = 100, level = 2, ingridience = new List<string>() { "choclate", "milk" }, makingMethod = new List<string>() { "mix", "bake" }, User = userList[0], picture = "pictures/SAM_0362.JPG", status = true,date=DateTime.Now },
            new recipes() { recipeName = "soup", categotyRecipe = categoryList[1], makingTime = 5, level = 1, ingridience = new List<string>() { "vegetabels", "water" }, makingMethod = new List<string>() { "mix", "cook" }, User = userList[1], picture = "pictures/soup.jpg", status = true,date=DateTime.Now },
            new recipes() { recipeName = "soup", categotyRecipe = categoryList[1], makingTime = 5, level = 1, ingridience = new List<string>() { "vegetabels", "water" }, makingMethod = new List<string>() { "mix", "cook" }, User = userList[1], picture = "pictures/soup.jpg", status = true,date=DateTime.Now },
            new recipes() { recipeName = "soup", categotyRecipe = categoryList[1], makingTime = 5, level = 1, ingridience = new List<string>() { "vegetabels", "water" }, makingMethod = new List<string>() { "mix", "cook" }, User = userList[1], picture = "pictures/soup.jpg", status = true,date=DateTime.Now },
            new recipes() { recipeName = "soup", categotyRecipe = categoryList[1], makingTime = 5, level = 1, ingridience = new List<string>() { "vegetabels", "water" }, makingMethod = new List<string>() { "mix", "cook" }, User = userList[1], picture = "pictures/soup.jpg", status = true,date=DateTime.Now }};
        }
    }
}