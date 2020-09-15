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
    [EnableCors(methods:"*",headers:"*",origins:"*")]
    public class recipeController : ApiController
    {
        public IHttpActionResult getAllRecipe()
        {
            return Ok(DB.recipeList);
        }
        [HttpGet]
        public recipes getRecipeDetails(string name)
        {
            foreach(recipes r in DB.recipeList)
                if(r.recipeName==name)
                    return r;
            return null;
        }
        public IHttpActionResult addRecipe(recipes newR)
        {
            if (newR.recipeName == null)
                return Ok("אין מתכון להוספה");
            newR.date =DateTime.Now;
            foreach (recipes r in DB.recipeList)
            {
                if (r == newR)
                {
                    if (r.status == true)
                        return Ok("קיים");
                    else if (r.status == false)
                        r.status = true;
                    return Ok("המתכון נוסף בהצלחה");
                }
            }
            DB.recipeList.Add(newR);
            return Ok("המתכון נוסף בהצלחה");

        }
        public IHttpActionResult editRecipe(recipes newR)
        {
            foreach (recipes r in DB.recipeList)
                if (r.recipeName == newR.recipeName)
                {
                    r.categotyRecipe = newR.categotyRecipe;
                    r.ingridience = newR.ingridience;
                    r.recipeName = newR.recipeName;
                    r.makingTime = newR.makingTime;
                    r.makingMethod = newR.makingMethod;
                    r.level = newR.level;
                    r.picture = newR.picture;
                    return Ok("בוצע בהצלחה");
                }
            return Ok("נכשל");
        }

    }
}
