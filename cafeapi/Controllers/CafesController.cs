using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using cafeapi.Models;
using cafeapi.Services;


namespace cafeapi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CafesController : ControllerBase
{
    private readonly GooglePlaceService _googleService;
    private readonly HttpClient _httpClient;
    
    public CafesController(GooglePlaceService googleService, HttpClient httpClient)
    {
        _googleService = googleService;
        _httpClient = httpClient;
    }

    [HttpGet]
    [OutputCache(PolicyName = "DailyCafes")]
    public async Task<ActionResult<List<CafeDto>>> GetCafes() {
       try
        {
            var cafes = await _googleService.GetCafes();
            return Ok(cafes);   
        } 
        catch (Exception ex)
        {
            return StatusCode(500, new { error = ex.Message, type = ex.GetType().Name });
        }
    }

    [HttpGet("photo")]
    public async Task<ActionResult> GetPhoto([FromQuery] string photoName)
    {
        if (string.IsNullOrEmpty(photoName))
            return BadRequest("photoName is required");

        try
        {
            var apiKey = Environment.GetEnvironmentVariable("GOOGLE_APIKEY") ?? 
                        throw new InvalidOperationException("API key missing");
            
            var photoUrl = $"https://places.googleapis.com/v1/{photoName}/media?maxHeightPx=800&maxWidthPx=800&key={apiKey}";
            
            var response = await _httpClient.GetAsync(photoUrl);
            response.EnsureSuccessStatusCode();
            
            var imageBytes = await response.Content.ReadAsByteArrayAsync();
            var contentType = response.Content.Headers.ContentType?.MediaType ?? "image/jpeg";
            
            return File(imageBytes, contentType);
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Failed to fetch photo", details = ex.Message });
        }
    }
}
