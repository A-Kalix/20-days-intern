using System.ComponentModel.DataAnnotations;

namespace H40.Application.DTOs.Indicators
{
    public class CreateIndicatorDto
    {
        [Required]
        [MaxLength(50)]
        public string Code { get; set; } = string.Empty;

        [Required]
        [MaxLength(200)]
        public string Name { get; set; } = string.Empty;
    }
}