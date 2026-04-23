
using cafeapi.Services;
using dotenv.net;

var envPath = Path.Combine(Directory.GetCurrentDirectory(), ".env");
DotEnv.Load(options: new DotEnvOptions(envFilePaths: new[] { envPath }));

var builder = WebApplication.CreateBuilder(args);
var allowedOrigins = builder.Configuration["CORS_ALLOWED_ORIGINS"]?
    .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries)
    ?? new[] { "http://localhost:3000" };

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Cors for client
builder.Services.AddCors(options => {
    options.AddPolicy("NextjsPolicy", policy => 
        policy.WithOrigins(allowedOrigins) 
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddHttpClient<GooglePlaceService>();

builder.Services.AddOutputCache(opt => {
    opt.AddPolicy("DailyCafes", b => b.Expire(TimeSpan.FromDays(1)));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// In production containers TLS is typically terminated by a reverse proxy.
if (!app.Environment.IsProduction())
{
    app.UseHttpsRedirection();
}
app.UseCors("NextjsPolicy");
app.UseOutputCache();
app.UseAuthorization();
app.MapControllers();

app.Run();
