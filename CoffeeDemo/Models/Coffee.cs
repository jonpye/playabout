using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CoffeeDemo.Models
{
    public class Coffee
    {
        [Key]
        public int Id { get; set; }
        
        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Volume is required")]
        public int Volume { get; set; }

        [ForeignKey("Company")]
        [Required(ErrorMessage = "Company is required")]
        public int CompanyId { get; set; }

        public Company Company { get; set; }
    }


}