using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using recipe.Models;

namespace recipe.Controllers
{
    [EnableCors(methods: "*", headers: "*", origins: "*")]
    public class categoryController : ApiController
    {
        public IHttpActionResult getAllCategory()
        {
            return Ok(DB.categoryList);
        }
        public category FindCategory(category name)
        {
            foreach (category c in DB.categoryList)
                if (c.name ==name.name)
                    return c;
            return null;
        }
    }
   
}
