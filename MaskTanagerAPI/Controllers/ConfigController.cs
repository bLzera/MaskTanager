using MaskTanager.Services;
using Microsoft.AspNetCore.Mvc;
using MaskTanager.DTOs;
using MaskTanager.Enums;
using MaskTanager.Helpers;
using Microsoft.AspNetCore.Http.HttpResults;

namespace MaskTanager.Controllers;

[ApiController]
[Route("[controller]")]
public class ConfigController : ControllerBase
{
    [HttpGet("enum/{nome}")]
    public ActionResult GetEnum(string nome)
    {
        var tipo = AppDomain.CurrentDomain.GetAssemblies()
            .SelectMany(a => a.GetTypes())
            .FirstOrDefault(t => t.IsEnum && t.Name.Equals(nome, StringComparison.OrdinalIgnoreCase));

        if (tipo == null)
            return NotFound("Enum não encontrado");

        var valores = Enum.GetValues(tipo)
            .Cast<Enum>()
            .Select(e => new
            {
                id = Convert.ToInt32(e),
                title = e.ToString(),
                description = e.GetDescription()
            });
        Console.WriteLine(valores);
        return Ok(valores);
    }
}