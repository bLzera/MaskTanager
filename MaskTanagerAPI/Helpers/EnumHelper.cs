using MaskTanager.Enums;
using MaskTanager.DTOs;

namespace MaskTanager.Helpers;

public static class EnumHelper
{
    public static IEnumerable<EnumDTO> GetEnumValues<T>() where T : Enum
    {
        return Enum.GetValues(typeof(T))
            .Cast<T>()
            .Select(e => new EnumDTO
            {
                Id = Convert.ToInt32(e),
                Title = e.ToString(),
                Description = (e as Enum).GetDescription()
            });
    }
}