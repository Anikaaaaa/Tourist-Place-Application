using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Tourist_Place_App.Models;

namespace Tourist_Place_App.Data
{
    public class Tourist_Place_AppContext : DbContext
    {
        public Tourist_Place_AppContext (DbContextOptions<Tourist_Place_AppContext> options)
            : base(options)
        {
        }

        public DbSet<Tourist_Place_App.Models.TouristPlaces> TouristPlaces { get; set; } = default!;
    }
}
