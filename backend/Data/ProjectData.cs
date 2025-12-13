using backend.Models;

namespace backend.Data;

public static class ProjectData
{
    public static List<Project> Projects = new()
    {
        new Project(1, "Portfolio Website", "My personal portfolio built with Next.js & .NET",
            "https://github.com/AnaZderic/portfolio", "https://your-portfolio.com",
            new [] { "Next.js", "TypeScript", "Tailwind", "C#" }),

        new Project(2, "Task Manager", "A full-stack task manager app",
            "https://github.com/AnaZderic/task-manager", null,
            new [] { "React", "C#", "Entity Framework" })
    };
}
