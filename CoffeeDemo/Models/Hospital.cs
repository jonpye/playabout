using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CoffeeDemo.Models
{
    public class Hospital
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int NoOfPatients { get; set; }
        public int MinutesWaiting { get; set; }
    }
}