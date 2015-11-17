using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CoffeeDemo.Controllers
{
    public class DemoController : Controller
    {
        // GET: Calendar
        public ActionResult Calendar()
        {
            return View();
        }

        public ActionResult Carousel()
        {
            return View();
        }
    }
}