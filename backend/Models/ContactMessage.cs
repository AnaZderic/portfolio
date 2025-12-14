namespace backend.Models;

public record ContactMessage
{
    public int Id { get; init; }
    public string Name { get; init; } = null!;
    public string Email { get; init; } = null!;
    public string Message { get; init; } = null!;
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
}