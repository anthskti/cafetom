# .NET Backend
What I did:
``` bash
dotnet new webapi --use-controllers -o cafeapi
cd cafeapi
dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 8.0.11
code -r ../cafeapi
```
Dev Launch:
```bash
dotnet run watch
```

## Architecutre
Model / CafeDto.cs 
- For one cafe, holds all the data needed for this website. 

Services / GooglePlaceService.cs
- Our logic. Will communicate to google to get this information. 

Controller / CafesController.cs
- Our communication to the web, complete communication from URL to logics. 
- Photo proxity endpoint sending photos to the frontend. CORS blockage. 

Program.cs
- Our main.py or index.js; the file that starts it all.


To Launch for HTTPS config:
```bash
dotnet run --launch-profile https
```
found in http://localhost:5105

Swagger Available Here: [Swagger](https://localhost:7211/swagger/index.html)
[app](https://localhost:7211/weatherforecast)

Program.cs: Like main.py or index.ts
Controllers/ : Communicates with http request.
Models/ or DTOs/ : Defined class for objects.
Data/ : The data, likely just pulled from the Google Place API.