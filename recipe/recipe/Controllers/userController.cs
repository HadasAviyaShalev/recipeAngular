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
    public class userController : ApiController
    {
        public IHttpActionResult getAllUsers()
        {
            return Ok(DB.userList);
        }
        public IHttpActionResult addUser(user u)
        {
            DB.userList.Add(u);
            return Ok("נרשמת בהצלחה");
        }
        public IHttpActionResult findUser(user u)
        {
            foreach (user x in DB.userList)
                if (x.name == u.name)
                {
                    if (x.password == u.password)
                        return Ok(true);
                    else return Ok(x.password);
                }
            return Ok(false);            
        }
    }
}
