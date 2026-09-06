using H40.Domain.Common;

namespace H40.Domain.Entities
{
    public class Language : BaseEntity
    {
        public string IsoCode { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public bool IsRightToLeft { get; set; } = false;
    }
}