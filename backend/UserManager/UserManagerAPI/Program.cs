using Microsoft.EntityFrameworkCore;
using UserManagerAPI.Data;
using UserManagerAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=users.db"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddScoped<JwtService>();

var app = builder.Build();

app.UseAuthorization();

app.UseCors("AllowAngular");

app.MapControllers();

app.MapGet("/", () => "API is running correctly!");

app.Run();