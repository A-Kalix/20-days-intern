using H40.Domain.Common;

namespace H40.Domain.Entities
{
    public class AnswerType : BaseEntity
    {
        public string Name { get; set; } = string.Empty; // e.g. Likert, Binary
        public bool IsCustom { get; set; }
    }
}