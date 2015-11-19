using System;
using System.ComponentModel.DataAnnotations;

namespace CoffeeDemo.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage="First name is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Surname is required")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "DOB is required")]
        public DateTime Dob { get; set; }

        [Required(ErrorMessage = "House number is required")]
        public int HouseNumber { get; set; }

        public string PostCode { get; set; }
    }
}