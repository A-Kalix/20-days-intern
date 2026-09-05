var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
// builder.Services.AddDbContext<AppDbContext>(...);
var app = builder.Build();
app.Run();