using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<WorkerHour> WorkerHours { get; set; }
    }
}