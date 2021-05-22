using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Demo.Data {
    public class AngularBackEndContext : DbContext {
        public DbSet<Models.Page> Pages { get; set; }

        public AngularBackEndContext(DbContextOptions<AngularBackEndContext> options) : base(options) {

        }
    }
}
