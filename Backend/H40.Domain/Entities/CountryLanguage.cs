using H40.Domain.Common;

namespace H40.Domain.Entities
{
    public class CountryLanguage : BaseEntity
    {
        public int CountryId { get; set; }
        public int LanguageId { get; set; }
        public bool IsPrimary { get; set; }
        public bool IsOfficial { get; set; }
    }
}