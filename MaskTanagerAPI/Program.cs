using System.Text.Json.Serialization;
using MaskTanager.Data;
using MaskTanager.Models;
using MaskTanager.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options => 
    options.UseNpgsql(builder.Configuration.GetConnectionString("Minha Conexao")));

builder.Services.AddScoped<ITaskService, TaskService>();

var app = builder.Build();

var retries = 10;
while (retries > 0)
{
    try
    {
        using var scope = app.Services.CreateScope();
        var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
        dbContext.Database.Migrate();
        
        Console.WriteLine("Migrations aplicadas");
        
        Console.WriteLine("Quantidade de registros: " + dbContext.Tasks.Count());
        
        if (!dbContext.Tasks.Any())
        {
            dbContext.Tasks.Add(new MaskTanager.Models.Task
            {
                Title = "Task 1",
                Description = "Task de teste numero 1"
            });
            
            dbContext.Tasks.Add(new MaskTanager.Models.Task
            {
                Title = "Task 2",
                Description = "Task de teste numero 2"
            });
            dbContext.SaveChanges();
            
            Console.WriteLine("Seed aplicada!");
        }
        
        Console.WriteLine("Quantidade de registros após seed: " +  dbContext.Tasks.Count());
        break;
    }
    catch (Exception Ex)
    {
        Console.WriteLine(Ex.ToString());
        retries--;
        Thread.Sleep(5000);
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
