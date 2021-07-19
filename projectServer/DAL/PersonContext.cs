using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class PersonContext : DbContext
    {
        public DbSet<Person> Person { get; set; }
        public DbSet<Child> Child { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
         => options.UseSqlServer(@"Data Source=(LocalDb)\MSSQLLocalDB;Initial Catalog=enroll;");
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>().Property(p => p.FirstName);
            modelBuilder.Entity<Person>().HasKey(p => p.personID);
            modelBuilder.Entity<Child>().HasKey(c => c.ChildID);
            
        }
    }
}
