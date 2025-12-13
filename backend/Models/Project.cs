namespace backend.Models
{
    public record Project(
        int Id,
        string Title,
        string Description,
        string RepoUrl,
        string? LiveUrl,
        string[] TechStack
    );
}