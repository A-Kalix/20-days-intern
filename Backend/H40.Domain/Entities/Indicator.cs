using H40.Domain.Common;

namespace H40.Domain.Entities
{
    public class Indicator : BaseEntity
    {
        public string Code { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int DimensionId { get; set; }
        public int AnswerTypeId { get; set; } // Linked Answer Type
    }
}