using Microsoft.AspNetCore.Mvc;
using H40.Application.DTOs.Indicators;

namespace H40.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IndicatorController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll() => Ok(new string[] { "Indicator1", "Indicator2" });

        [HttpPost]
        public IActionResult Create([FromBody] CreateIndicatorDto dto) => Ok(dto);
    }
}