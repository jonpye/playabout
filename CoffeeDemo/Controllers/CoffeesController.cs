using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CoffeeDemo.Models;

namespace CoffeeDemo.Controllers
{
    public class CoffeesController : Controller
    {
        private CoffeeDemoContext db = new CoffeeDemoContext();

        // GET: Coffees
        public async Task<ActionResult> Index()
        {
            var coffees = db.Coffees.Include(c => c.Company);
            return View(await coffees.ToListAsync());
        }

        // GET: /Coffees/IndexVM
        public async Task<ActionResult> IndexVM()
        {
            var coffees = db.Coffees.Include(c => c.Company);

            return Json(await coffees.ToListAsync(), JsonRequestBehavior.AllowGet);
        }


        // GET: Coffees/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            
            //Coffee coffee = await db.Coffees.FindAsync(id);

            Coffee coffee = await db.Coffees
                .Where(c => c.Id == id)
                .Include(c => c.Company)
                .FirstOrDefaultAsync();

            if (coffee == null)
            {
                return HttpNotFound();
            }
            return View(coffee);
        }

        // GET: Coffees/Create
        public ActionResult Create()
        {
            ViewBag.CompanyId = new SelectList(db.Companies, "Id", "CompanyName");
            return View();
        }

        // POST: Coffees/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Name,Volume,CompanyId")] Coffee coffee)
        {
            if (ModelState.IsValid)
            {
                db.Coffees.Add(coffee);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.CompanyId = new SelectList(db.Companies, "Id", "CompanyName", coffee.CompanyId);
            return View(coffee);
        }

        // GET: Coffees/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Coffee coffee = await db.Coffees.FindAsync(id);
            if (coffee == null)
            {
                return HttpNotFound();
            }

            ViewBag.CompanyId = new SelectList(db.Companies, "Id", "CompanyName", coffee.CompanyId);
            return View(coffee);
        }

        // POST: Coffees/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,Volume,CompanyId")] Coffee coffee)
        {
            if (ModelState.IsValid)
            {
                db.Entry(coffee).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.CompanyId = new SelectList(db.Companies, "Id", "CompanyName", coffee.CompanyId);
            return View(coffee);
        }

        // GET: Coffees/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Coffee coffee = await db.Coffees.FindAsync(id);
            if (coffee == null)
            {
                return HttpNotFound();
            }
            return View(coffee);
        }

        // POST: Coffees/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Coffee coffee = await db.Coffees.FindAsync(id);
            db.Coffees.Remove(coffee);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
