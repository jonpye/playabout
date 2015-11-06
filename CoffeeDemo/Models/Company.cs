using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace CoffeeDemo.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage="Please provide a Company Name")]
        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }
    }
}
