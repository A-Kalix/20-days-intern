using H40.Domain.Common;

namespace H40.Domain.Entities
{
    public class Role : BaseEntity
    {
        public string Name { get; set; } = string.Empty;
        public int Level { get; set; } // 1: Sistem, 2: Model, 3: Hastane, 4: Kullanıcı
    }
}