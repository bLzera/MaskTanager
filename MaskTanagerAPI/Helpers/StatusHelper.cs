using MaskTanager.DTOs;
using MaskTanager.Helpers;
using System.ComponentModel;
using MaskTanager.Enums;

namespace MaskTanager.Helpers;

public static class StatusHelper
{
    public static EnumDTO GetStatus(int status)
    {
        return EnumHelper.GetEnumValues<Status>().FirstOrDefault(x => x.Id == status);
    }
}