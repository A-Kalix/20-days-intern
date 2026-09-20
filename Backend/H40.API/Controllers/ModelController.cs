using Microsoft.AspNetCore.Mvc;

namespace H40.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelController : ControllerBase
    {
        [HttpGet("tree")]
        public IActionResult GetModelTree() => Ok(new { name = "Model A", children = new [] { new { name = "Boyut 1" } } });
    }
}