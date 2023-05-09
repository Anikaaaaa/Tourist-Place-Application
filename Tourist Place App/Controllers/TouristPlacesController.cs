using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Tourist_Place_App.Data;
using Tourist_Place_App.Models;

namespace Tourist_Place_App.Controllers
{
    public class TouristPlacesController : Controller
    {
        private readonly Tourist_Place_AppContext _context;

        public TouristPlacesController(Tourist_Place_AppContext context)
        {
            _context = context;
        }

        // GET: TouristPlaces
        public async Task<IActionResult> Index(string? sortOrder, string? srchKey)
        {
            var list = await _context.TouristPlaces.ToListAsync();
            return View(list);
        }


        // POST: TouristPlaces/SearchAndSort
        public IActionResult SearchAndSort(string? sortOrder, string? srchKey)
        {
            var places = from p in _context.TouristPlaces
                         select p;

            if (!string.IsNullOrEmpty(srchKey))
            {
                places = places.Where(s => s.Name!.Contains(srchKey));
            }

            switch (sortOrder)
            {
                case "asc":
                {
                    places = places.OrderBy(x => x.Rating);
                    break;
                }
                case "dsc":
                {
                    places = places.OrderByDescending(x => x.Rating);
                    break;
                }
                default:
                {
                    places = places.OrderBy(x => x.Id);
                    break;
                }
            }
            return PartialView("~/Views/Shared/_PartialView.cshtml", places);
        }

        [HttpPost]
        public async Task<IActionResult> Create([Bind("Id,Name,Address,Rating,Type,Picture")] TouristPlaces touristPlaces)
        {
            if (ModelState.IsValid)
            {
                _context.Add(touristPlaces);
                await _context.SaveChangesAsync();

                return PartialView("~/Views/Shared/_PartialView.cshtml", _context.TouristPlaces);
            }
            return NotFound();
        }

        // GET: TouristPlaces/GetTouristPlace
        public TouristPlaces? GetTouristPlace(int? id)
        {
            if (id == null || _context.TouristPlaces == null)
            {
                return null;
            }
            var touristPlaces = _context.TouristPlaces.FindAsync(id).Result;

            return touristPlaces;
        }

        // POST: TouristPlaces/Edit/5
        [HttpPost]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Address,Rating,Type,Picture")] TouristPlaces touristPlaces)
        {
            if (id != touristPlaces.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(touristPlaces);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TouristPlacesExists(touristPlaces.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return PartialView("~/Views/Shared/_PartialView.cshtml", _context.TouristPlaces);
        }

        // POST: TouristPlaces/DeleteConfirmed
        //[HttpPost, ActionName("Delete")]
        //[ValidateAntiForgeryToken]
        [HttpPost]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.TouristPlaces == null)
            {
                return Problem("Entity set 'Tourist_Place_AppContext.TouristPlaces'  is null.");
            }
            var touristPlaces = await _context.TouristPlaces.FindAsync(id);
            if (touristPlaces != null)
            {
                _context.TouristPlaces.Remove(touristPlaces);
                await _context.SaveChangesAsync();
            }

            return PartialView("~/Views/Shared/_PartialView.cshtml", _context.TouristPlaces);
        }

        private bool TouristPlacesExists(int id)
        {
            return _context.TouristPlaces.Any(e => e.Id == id);
        }
    }
}
