
using cafeapi.Services;
using dotenv.net;

DotEnv.Load();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// Cors for client
builder.Services.AddCors(options => {
    options.AddPolicy("NextjsPolicy", policy => 
        policy.WithOrigins("http://localhost:3000") 
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

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.UseOutputCache();
app.UseCors("NextjsPolicy");

app.Run();
