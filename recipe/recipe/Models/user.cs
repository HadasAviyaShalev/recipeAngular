using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace recipe.Models
{
    public class user
    {
        public int code { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
    }
}