using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace recipe.Models
{
    public class recipes
    {
        public string recipeName { get; set; }
        public category categotyRecipe { get; set; }
        public int makingTime { get; set; }
        public int level { get; set; }
        public DateTime date { get; set; }
        public List<string> ingridience { get; set; }
        public List<string> makingMethod { get; set; }
        public user User { get; set; }
        public string picture { get; set; }
        public Boolean status { get; set; }
    }
}