using System.ComponentModel;

namespace MaskTanager.Enums;

public enum Status
{
    [Description("Task finalizada")]
    Concluida = 1,
    
    [Description("Task ativa, pendente de ser finalizada.")]
    Pendente = 2,
    
    [Description("Task cancelada por conta de algum erro.")]
    Cancelada = 3,
}