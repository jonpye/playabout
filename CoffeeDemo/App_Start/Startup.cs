using Microsoft.Owin;
using Owin;
using CoffeeDemo.App_Start;

namespace CoffeeDemo.App_Start
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}