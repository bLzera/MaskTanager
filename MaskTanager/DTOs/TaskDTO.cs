using MaskTanager.Enums;
namespace MaskTanager.DTOs;

public class TaskDTO
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public Status Status { get; set; }
}