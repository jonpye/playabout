using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.Migrations;

namespace CoffeeDemo.Models
{
    public class CoffeeDemoContextInitializer : DropCreateDatabaseIfModelChanges<CoffeeDemoContext>
    {
        protected override void Seed(CoffeeDemoContext context)
        {
            base.Seed(context);

            context.Companies.AddOrUpdate(
                c => c.CompanyName,
                new Company { Id = 1, CompanyName = "Starbucks" },
                new Company { Id = 2, CompanyName = "Costa" },
                new Company { Id = 3, CompanyName = "Cafe Nero" },
                new Company { Id = 4, CompanyName = "Coffee #1" }
                );

            context.Coffees.AddOrUpdate(
                c => c.CompanyId,
                new Coffee { CompanyId = 1, Name = "Cappachino", Volume = 100 },
                new Coffee { CompanyId = 2, Name = "Latte", Volume = 100 },
                new Coffee { CompanyId = 3, Name = "Mocha", Volume = 100 },
                new Coffee { CompanyId = 4, Name = "Flat White", Volume = 100 }
                );
        }
    }
}