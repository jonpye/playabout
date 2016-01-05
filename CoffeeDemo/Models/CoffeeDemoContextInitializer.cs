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
                new Company { Id = 4, CompanyName = "Coffee #1" },
                new Company { Id = 5, CompanyName = "Coffee Stars" }
                );

            context.Coffees.AddOrUpdate(
                c => c.CompanyId,
                new Coffee { CompanyId = 1, Name = "Cappachino", Volume = 100 },
                new Coffee { CompanyId = 2, Name = "Latte", Volume = 100 },
                new Coffee { CompanyId = 3, Name = "Mocha", Volume = 100 },
                new Coffee { CompanyId = 4, Name = "Flat White", Volume = 100 },
                new Coffee { CompanyId = 1, Name = "Coffee Natural", Volume = 50 },
                new Coffee { CompanyId = 2, Name = "Espresso", Volume = 50 },
                new Coffee { CompanyId = 5, Name = "Mocha Latte", Volume = 75 },
                new Coffee { CompanyId = 5, Name = "Flat White Mocha", Volume = 75 }
                );

            context.Customers.AddOrUpdate(
                c => c.Id,
                new Customer { FirstName = "joe", Surname = "bloggs", Dob = DateTime.Now.AddYears(-25).Date, HouseNumber = 21, PostCode = "GL2 7WQ" },
                new Customer { FirstName = "jeff", Surname = "black", Dob = DateTime.Now.AddYears(-20).Date, HouseNumber = 22, PostCode = "GL53 4RT" },
                new Customer { FirstName = "james", Surname = "bond", Dob = DateTime.Now.AddYears(-30).Date, HouseNumber = 23, PostCode = "GL50 2RE" }
            );

            context.Contacts.AddOrUpdate(
               c => c.ContactId,
               new Contact { Firstname = "mano", Surname = "woman", ContactId = 1, ContactTypeId = 2, GenderTypeId = 0, IsActive = true, Phone = "01242 233772", TwitterHandle = "manow"  },
               new Contact { Firstname = "james", Surname = "bond", ContactId = 1, ContactTypeId = 1, GenderTypeId = 1, IsActive = true, Phone = "01179 777777", TwitterHandle = "bondj" },
               new Contact { Firstname = "jackie", Surname = "blackie", ContactId = 1, ContactTypeId = 0, GenderTypeId = 2, IsActive = true, Phone = "08023 111122", TwitterHandle = "jackie.blackie"  }
           );

            context.SaveChanges();
        }
    }
}