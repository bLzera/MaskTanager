using MaskTanager.Enums;

namespace MaskTanager.DTOs;

public class EditTaskDTO
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public Status Status { get; set; }
}