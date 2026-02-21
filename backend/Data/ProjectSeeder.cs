using backend.Models;
using Microsoft.EntityFrameworkCore;


namespace backend.Data;

public static class ProjectSeeder
{
    public static async Task Seed(PortfolioDbContext db)
    {
        if (await db.Projects.AnyAsync())
            return;

        var projects = new List<Project>
        {
            new Project
            {
                Title = "Vehicle Management App",
                Description = "A vehicle management system that handles vehicle data, CRUD operations, and validation logic.",
                RepoUrl = "https://github.com/AnaZderic/vehicle-app-v1",
                TechStack = new[] { "Next.js", "Firebase", "Cloud Object Storage" }
            },
            new Project
            {
                Title = "Coffee Shop POS System",
                Description = "A full-featured coffee shop point-of-sale system built with Entity Framework, handling orders, payments, and inventory.",
                RepoUrl = "https://github.com/AnaZderic/coffee-shop-point-of-sale-ef",
                TechStack = new[] { "C#", ".NET", "Entity Framework"}
            },
            new Project
            {
                Title = "Credit Card Validation",
                Description = "A C# application that validates credit card numbers using industry-standard algorithms.",
                RepoUrl = "https://github.com/AnaZderic/credit-card-validation",
                TechStack = new[] { "React", "Node.js", "Algorithms" }
            },
            new Project
            {
                Title = "TXT to Word Converter",
                Description = "A utility tool that converts TXT files into Word documents efficiently.",
                RepoUrl = "https://github.com/S4UR000N/TxtToWord",
                TechStack = new[] { "Web Components", "Node.js", "File Processing", "REST API" }
            },
            
        };

        await db.Projects.AddRangeAsync(projects);
        await db.SaveChangesAsync();
    }
}
