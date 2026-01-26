namespace cafeapi.Models;

public record CafeDto(
    string Id,
    string Name,
    string Neighborhood,
    string Address,
    string Image,
    int StudyScore,
    bool HasWifi,
    bool IsQuiet,
    bool HasOutlets,
    string Description,
    Coordinates Coordinates
);

public record Coordinates(double Lat, double Lng);