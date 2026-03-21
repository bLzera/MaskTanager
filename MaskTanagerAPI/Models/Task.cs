using MaskTanager.Enums;
namespace MaskTanager.Models;

public class Task
{
    public Task()
    {}
    
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
    public Status Status { get; set; } = Status.Pendente;
}