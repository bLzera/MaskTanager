using MaskTanager.Data;
using MaskTanager.DTOs;
using MaskTanager.Enums;
using Microsoft.EntityFrameworkCore;
using MaskTanager.Helpers;

namespace MaskTanager.Services;

public class TaskService : ITaskService
{
    private readonly AppDbContext _context;
    
    public TaskService(AppDbContext context)
    {
        _context = context;
    }

    public async Task<List<TaskDTO>> GetTasks(int? id = null)
    {
        var tasks = await _context.Tasks.ToListAsync();
        return tasks.Select(
            t => new TaskDTO
            {
                Id = t.Id,
                Title = t.Title,
                Description = t.Description,
                Status = StatusHelper.GetStatus((int)t.Status),
            }).ToList();
    }
    
    public async Task<TaskDTO?> GetTaskById(int id)
    {
        var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);

        if (task == null)
        {
            return null;
        }

        return new TaskDTO
        {
            Id = task.Id,
            Title = task.Title,
            Description = task.Description,
            Status = StatusHelper.GetStatus((int)task.Status)
        };
    }

    public async Task<TaskDTO?> EditTask(int id, string? titulo = null, string? descricao = null, Status? status = null)
    {
        var task = await _context.Tasks.FindAsync(id);

        if (task == null)
        {
            return null;
        }
        
        if (titulo != null)
        {
            task.Title = titulo;
        }
        
        if (descricao != null)
        {
            task.Description = descricao;
        }

        if (status != null)
        {
            task.Status = status.Value;
        }

        await _context.SaveChangesAsync();

        return new TaskDTO
        {
            Id = task.Id,
            Title = task.Title,
            Description = task.Description,
            Status = StatusHelper.GetStatus((int)task.Status)
        };
    }

    public async Task<TaskDTO> AddTask(string titulo, string? descricao = null)
    {
        var task = new MaskTanager.Models.Task
        {
            Title = titulo,
            Description = descricao,
        };

        await _context.Tasks.AddAsync(task);
        
        await  _context.SaveChangesAsync();

        return new TaskDTO
        {
            Id = task.Id,
            Title = task.Title,
            Description = task.Description,
            Status = StatusHelper.GetStatus((int)task.Status),
        };
    }

    public async Task<bool> DeleteTask(int id)
    {
        var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id);
        
        if (task == null)
        {
            return false;
        }
        
        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();

        return true;
    }
}