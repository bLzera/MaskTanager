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

    [HttpGet]
    public async Task<ActionResult<TaskDTO>> GetTasks()
    {
        var tasks = await _taskService.GetTasks();
        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TaskDTO>> GetTaskById(int id)
    {
        var task = await _taskService.GetTaskById(id);
        
        return task is not null ? Ok(task) : NotFound();
    }

    [HttpPost("edit")]
    public async Task<ActionResult<TaskDTO>> EditTask([FromBody] EditTaskDTO editTaskDto)
    {
        var task = await _taskService.EditTask(
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

    [HttpPost("delete")]
    public async Task<ActionResult<TaskDTO>> DeleteTask([FromBody] DeleteTaskDTO deleteTaskDto)
    {
        var task = await _taskService.DeleteTask(deleteTaskDto.Id);

        if (task)
        {
            return Ok();
        }
        
        return NotFound("Não consegui deletar a task >.<");
    }

    [HttpPost("add")]
    public async Task<ActionResult<TaskDTO>> AddTask([FromBody] AddTaskDTO addTaskDto)
    {
        var task = await _taskService.AddTask(
            addTaskDto.Title,
            addTaskDto.Description
            );

        return Ok(task);
    }
}