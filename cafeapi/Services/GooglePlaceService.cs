using System.Net.Http.Json;
using cafeapi.Models;
using Microsoft.Extensions.Configuration;

namespace cafeapi.Services;

public class GooglePlaceService 
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public GooglePlaceService(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _apiKey = config["GOOGLE_APIKEY"] ?? throw new ArgumentNullException("Google API Key is missing.");
    }

    public async Task<List<CafeDto>> GetCafes(){
        // Console.WriteLine("Cache Tested at: " + DateTime.Now);
        // Preparing HTTP request to Googles API
        var request = new HttpRequestMessage(HttpMethod.Post, "https://places.googleapis.com/v1/places:searchText");
        request.Headers.Add("X-Goog-Api-Key", _apiKey);
        request.Headers.Add("X-Goog-FieldMask", "places.id,places.displayName,places.formattedAddress,places.location,places.editorialSummary,places.photos");
        // 2. Map to your CafeDto (Logic for filtering study-specific vibes)
        var body = new { 
            textQuery = "best aesthetic study cafes Toronto",
            includedType = "cafe",
            maxResultCount = 30
        };

        request.Content = JsonContent.Create(body);
        var response = await _httpClient.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var data = await response.Content.ReadFromJsonAsync<GoogleResponse>();

        // Mapping to DTO
        return data?.Places.Select(p => new CafeDto(
            p.Id,
            p.DisplayName.Text,
            p.FormattedAddress,
            p.EditorialSummary?.Text ?? "No description available.",
            0.0, // Will do study score logic later
            true, true, true, // Logic for these can
            new Coordinates(p.Location.Latitude, p.Location.Longitude),
            p.Photos?.FirstOrDefault()?.Name ?? ""
        )).ToList() ?? new List<CafeDto>();


        
    }

// Internal records to map Google's API response
public record GoogleResponse(List<GooglePlace> Places);
public record GooglePlace(string Id, DisplayName DisplayName, string FormattedAddress, LocationData Location, Summary? EditorialSummary, List<Photo>? Photos);
public record DisplayName(string Text);
public record Summary(string Text);
public record LocationData(double Latitude, double Longitude);
public record Photo(string Name);
}