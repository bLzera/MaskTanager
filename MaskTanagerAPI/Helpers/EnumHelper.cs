using MaskTanager.Enums;

namespace MaskTanager.Helpers;

public static class EnumHelper
{
    public static IEnumerable<object> GetEnumValues<T>() where T : Enum
    {
        return Enum.GetValues(typeof(T))
            .Cast<T>()
            .Select(e => new
            {
                id = Convert.ToInt32(e),
                nome = e.ToString(),
                descricao = (e as Enum).GetDescription()
            });
    }
}