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
    public CafesController(GooglePlaceService googleService)
    {
        _googleService = googleService;
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
}
