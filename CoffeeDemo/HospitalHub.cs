using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using CoffeeDemo.Models;

namespace CoffeeDemo
{
    [HubName("HospitalDataHub")]
    public class HospitalHub : Hub
    {
        private static int hitCount = 0;

        public void RecordHit()
        {
            hitCount += 1;

            this.Clients.All.onHitRecorded(hitCount);
        }

        //public void Hello()
        //{
        //    Clients.All.hello();
        //}
    }
}