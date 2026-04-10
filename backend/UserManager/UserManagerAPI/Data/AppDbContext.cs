using Microsoft.EntityFrameworkCore;
using UserManagerAPI.Models;

namespace UserManagerAPI.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }
    }
}