namespace backend.Models;

public record Project
{
    public int Id { get; init; }
    public string Title { get; init; } = null!;
    public string Description { get; init; } = null!;
    public string RepoUrl { get; init; } = null!;
    public string? LiveUrl { get; init; }
    public string[] TechStack { get; init; } = Array.Empty<string>();
}