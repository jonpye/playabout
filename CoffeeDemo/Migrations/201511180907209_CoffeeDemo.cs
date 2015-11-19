namespace CoffeeDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CoffeeDemo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Coffees",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        Volume = c.Int(nullable: false),
                        CompanyId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Companies", t => t.CompanyId, cascadeDelete: true)
                .Index(t => t.CompanyId);
            
            CreateTable(
                "dbo.Companies",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CompanyName = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        Surname = c.String(nullable: false),
                        Dob = c.DateTime(nullable: false),
                        HouseNumber = c.Int(nullable: false),
                        PostCode = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Coffees", "CompanyId", "dbo.Companies");
            DropIndex("dbo.Coffees", new[] { "CompanyId" });
            DropTable("dbo.Customers");
            DropTable("dbo.Companies");
            DropTable("dbo.Coffees");
        }
    }
}
