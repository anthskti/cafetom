
namespace cafeapi.Controllers;

[ApiController]
[Route("[controller]")]

public class CafesController : ControllerBase
{
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<CafeDto>>> GetCafes() {
        var apiKey = "YOUR_GOOGLE_KEY";
        var url = $"https://maps.googleapis.com/maps/api/place/textsearch/json?query=study+cafes+in+toronto&key={apiKey}";
        
        // 1. Fetch from Google Place
        var response = await _httpClient.GetFromJsonAsync<GoogleResponse>(url);
        
        // 2. Map to your CafeDto (Logic for filtering study-specific vibes)
        var cafes = response.Results.Select(r => new CafeDto(
            Id: r.place_id,
            Name: r.name
        ));

        return Ok(cafes);
    }
}
