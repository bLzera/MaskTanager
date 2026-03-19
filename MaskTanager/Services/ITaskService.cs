using MaskTanager.Models;
using MaskTanager.DTOs;
using MaskTanager.Enums;

namespace MaskTanager.Services;

public interface ITaskService
{
    Task<List<TaskDTO>> GetTasks(int? id = null);
    Task<TaskDTO> EditTask(int id, string? titulo = null, string? descricao = null, Status? status = null);
    Task<TaskDTO> AddTask(string titulo, string? descricao = null);
    Task<bool> DeleteTask(int id);
}