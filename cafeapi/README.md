# .NET Backend
What I did:
``` bash
dotnet new webapi --use-controllers -o cafeapi
cd cafeapi
dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 8.0.11
code -r ../cafeapi
```


To Launch:
```bash
dotnet run --launch-profile https
```

Swagger Available Here: [Swagger](https://localhost:7211/swagger/index.html)
[app](https://localhost:7211/weatherforecast)

Program.cs: Like main.py or index.ts
Controllers/ : Communicates with http request.
Models/ or DTOs/ : Defined class for objects.
Data/ : The data, likely just pulled from the Google Place API.