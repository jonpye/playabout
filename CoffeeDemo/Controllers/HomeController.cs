using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CoffeeDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SignalR()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        // GET: /Home/Ractive
        public ActionResult Ractive()
        {
            return View();
        }

        // GET: /Home/hospitals
        public ActionResult Hospitals()
        {
            var context = GlobalHost.ConnectionManager.GetHubContext<HospitalHub>();
            context.Clients.All.redisHospData();

            return View();
        }

        public ActionResult AboutTest()
        {
            ViewBag.Message = "About test message.";

            return View("About");
        }
        // GET: /home/contact
        public ActionResult Contact()
        {
            ViewBag.Message = "The contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Contact(string message)
        {
            ViewBag.ContactMessage = string.Format("The messsage you sent was... '{0}'", message);

            return View("ContactThanks");
        }
    }
}