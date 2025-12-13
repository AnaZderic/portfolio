using backend.Data;
using backend.Models;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(MyAllowSpecificOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:3000", "https://localhost:3000")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/", () => "Backend is running!");

app.MapGet("/api/projects", () => ProjectData.Projects)
.WithName("GetProjects");

app.MapPost("/api/contact", (ContactRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
    string.IsNullOrWhiteSpace(request.Email) ||
    string.IsNullOrWhiteSpace(request.Message))
    {
        return Results.BadRequest(new { error = "All fields are required" });
    }

    Console.WriteLine($"New contact: {request.Name} <{request.Email}>: {request.Message}");

//TODO persistance

    return Results.Ok(new { success = true });
}).WithName("PostContact");

app.Run();