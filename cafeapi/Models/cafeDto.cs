namespace cafeapi.Models;

public record CafeDto(
    string Id,
    string Name,
    string Address,
    string Description,
    double StudyScore, // Will be calc'd with average
    // Features from Googles API
    bool HasWifi, 
    bool IsQuiet,
    bool HasOutlets,
    Coordinates Coordinates,
    string ImageUrl
);

public record Coordinates(double Lat, double Lng);