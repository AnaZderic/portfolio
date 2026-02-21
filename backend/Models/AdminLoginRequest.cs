namespace backend.Models;

public record AdminLoginRequest(
    string Email,
    string Password
);
