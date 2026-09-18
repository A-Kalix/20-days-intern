using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using H40.Application.DTOs.Indicators;

namespace H40.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = "SistemYöneticisi,ModelYöneticisi")]
    public class IndicatorController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll() => Ok(new string[] { "Indicator1", "Indicator2" });

        [HttpPost]
        public IActionResult Create([FromBody] CreateIndicatorDto dto) => Ok(dto);
    }
}