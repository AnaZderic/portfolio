using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class PortfolioDbContext : DbContext
{
    public PortfolioDbContext(DbContextOptions<PortfolioDbContext> options)
        : base(options)
    {
    }

    public DbSet<Project> Projects => Set<Project>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Project>()
            .Property(p => p.TechStack)
            .HasColumnType("text[]");

        base.OnModelCreating(modelBuilder);
    }
}
