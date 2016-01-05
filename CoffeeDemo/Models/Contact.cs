using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CoffeeDemo.Models
{
    public class Contact
    {
        [Key]
        public int ContactId { get; set; }

        public string Firstname { get; set; }
        public string Surname { get; set; }

        [DisplayName("Contact Type")]
        public int ContactTypeId { get; set; }
        public string Phone { get; set; }

        [DisplayName("Twitter Handle")]
        public string TwitterHandle { get; set; }

        [DisplayName("Gender")]
        public int GenderTypeId { get; set; }

        [DisplayName("Active?")]
        public bool IsActive { get; set; }

        public int Tester { get; set; }
    }
}