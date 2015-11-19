using CoffeeDemo.Models;

namespace CoffeeDemo.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CoffeeDemoContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CoffeeDemoContext context)
        {
            context.Companies.AddOrUpdate(
                c => c.CompanyName,
                new Company { Id = 1, CompanyName = "Starbucks" },
                new Company { Id = 2, CompanyName = "Costa" },
                new Company { Id = 3, CompanyName = "Cafe Nero" },
                new Company { Id = 4, CompanyName = "Coffee #1" },
                new Company { Id = 5, CompanyName = "Coffee Stars" }
                );

            context.Coffees.AddOrUpdate(
                c => c.CompanyId,
                new Coffee { CompanyId = 1, Name = "Cappachino", Volume = 100 },
                new Coffee { CompanyId = 2, Name = "Latte", Volume = 100 },
                new Coffee { CompanyId = 3, Name = "Mocha", Volume = 100 },
                new Coffee { CompanyId = 4, Name = "Flat White", Volume = 100 }
                );

            context.Customers.AddOrUpdate(
                c => c.Id,
                new Customer { FirstName = "joe", Surname = "bloggs", Dob = DateTime.Now.AddYears(-25).Date, HouseNumber = 21, PostCode = "GL2 7WQ" },
                new Customer { FirstName = "jeff", Surname = "black", Dob = DateTime.Now.AddYears(-20).Date, HouseNumber = 22, PostCode = "GL53 4RT" },
                new Customer { FirstName = "james", Surname = "bond", Dob = DateTime.Now.AddYears(-30).Date, HouseNumber = 23, PostCode = "GL50 2RE" }
            );
        }
    }
}
