using Microsoft.EntityFrameworkCore;
using MaskTanager.Models;

namespace MaskTanager.Data;

public class AppDbContext : DbContext 
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {}
    
    public DbSet<MaskTanager.Models.Task> Tasks { get; set; }
}