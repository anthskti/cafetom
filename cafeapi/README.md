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

## Docker (Local)

Build and Run API Container
```bash
docker compose -f docker-compose.api.yml up --build
```

Remove Container
```bash
docker compose -f docker-compose.api.yml
```


## Docker (Deployment)

Build image:
```bash
docker build -t cafeapi:latest ./cafeapi
```

Run container:

```bash
docker run --rm -p 8080:8080 \
  -e ASPNETCORE_ENVIRONMENT=Production \
  -e GOOGLE_APIKEY=... \
  -e CORS_ALLOWED_ORIGINS=cafetom.vercel.app \
  cafeapi:latest
```
```bash
docker run --rm -p 8080:8080 \
  -e ASPNETCORE_ENVIRONMENT=Production \
  -e GOOGLE_APIKEY=your_google_api_key \
  -e CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com \
  cafeapi:latest
```

Using compose from repo root:
```bash
export GOOGLE_APIKEY=your_google_api_key
export CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
docker compose -f docker-compose.api.yml up --build -d
```