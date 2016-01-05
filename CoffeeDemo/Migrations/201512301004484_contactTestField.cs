namespace CoffeeDemo.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class contactTestField : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Contacts", "Tester", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Contacts", "Tester");
        }
    }
}
