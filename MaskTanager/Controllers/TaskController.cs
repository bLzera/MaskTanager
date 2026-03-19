using MaskTanager.Services;
using Microsoft.AspNetCore.Mvc;
using MaskTanager.DTOs;

namespace MaskTanager.Controllers;

[ApiController]
[Route("[controller]")]
public class TaskController : ControllerBase
{
    private readonly ITaskService _taskService;

    public TaskController(ITaskService taskService)
    {
        _taskService = taskService;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TaskDTO>> GetTasks(int? id)
    {
        var tasks = await _taskService.GetTasks(id);
        return Ok(tasks);
    }

    [HttpPost]
    public async Task<ActionResult<TaskDTO>> EditTask([FromBody] EditTaskDTO editTaskDto)
    {
        var task = _taskService.EditTask(
            editTaskDto.Id, 
            editTaskDto.Title, 
            editTaskDto.Description, 
            editTaskDto.Status);

        if (task != null)
        {
            return Ok(task);    
        }

        return NotFound("Task not found");
    } 
}