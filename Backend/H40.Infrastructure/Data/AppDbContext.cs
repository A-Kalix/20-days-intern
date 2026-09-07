using Microsoft.EntityFrameworkCore;
using H40.Domain.Entities;

namespace H40.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

        public DbSet<Indicator> Indicators { get; set; }
        public DbSet<Language> Languages { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Indicator>().HasQueryFilter(x => !x.IsDeleted);
            modelBuilder.Entity<Language>().HasQueryFilter(x => !x.IsDeleted);
        }
    }
}