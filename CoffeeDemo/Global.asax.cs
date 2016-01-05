using CoffeeDemo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace CoffeeDemo
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {

            //Database.SetInitializer(new CoffeeDemoContextInitializer());

            //Database.SetInitializer<CoffeeDemoContext>(new CoffeeDemoContextInitializer());
            //Database.SetInitializer(new DropCreateDatabaseIfModelChanges<CoffeeDemoContext>());

            //CoffeeDemoContextInitializer db = new CoffeeDemoContextInitializer();
            //db.InitializeDatabase(new CoffeeDemoContext());

            //Database.SetInitializer(new DropCreateDatabaseIfModelChanges<CoffeeDemoContext>());

            Database.SetInitializer(new CoffeeDemoContextInitializer());
            CoffeeDemoContext coffeeDemoContext = new CoffeeDemoContext();
            coffeeDemoContext.Database.Initialize(true);

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
