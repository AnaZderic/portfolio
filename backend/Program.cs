using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<PortfolioDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy => policy
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PortfolioDbContext>();
    db.Database.Migrate();
    ProjectSeeder.Seed(db);
}

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PortfolioDbContext>();
    if (!db.Database.CanConnect())
        throw new Exception("Cannot connect to database!");
}


app.MapGet("/api/projects", async (PortfolioDbContext db) =>
{
    return Results.Ok(await db.Projects.ToListAsync());
});


app.MapPost("/api/contact", async (ContactMessage request, PortfolioDbContext db) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
        string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { error = "All fields are required" });
    }

    db.ContactMessages.Add(request);
    await db.SaveChangesAsync();

    return Results.Ok(new { success = true });
});

app.MapGet("/api/admin/contacts", async (PortfolioDbContext db) =>
{
    var messages = await db.ContactMessages.OrderByDescending(m => m.CreatedAt).ToListAsync();
    return Results.Ok(messages);
});

app.Run();
