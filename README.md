# WeatherForecastTS

Welcome to WeatherForecastTS! This project is designed to retrieve weather information in various formats.

## Getting Started

Before launching the application, run the following command to install dependencies:
```bash
npm i
```

To start the application, run the following command:
```bash
npm start
```

Alternatively, you can use Docker to work with the application:
```bash
docker build -t weatherts .
docker run -p 3001:3001 weatherts
```
Once the application is running, you can send requests and receive information using Postman or any other HTTP client.


## Sending Requests

Send a GET request to the following endpoint to retrieve weather information for a specific city:
```bash
http://localhost:3001/weatherForecast/cities/{city}
```
Make sure to replace {city} with the name of the city you want to retrieve weather information for.


## Request Body

For each request, include your API key in the request body to access the OpenWeatherMap API:
```bash
{
    "apiKey": "YOUR_API_KEY"
}
```


## Error Handling

The application is capable of handling basic errors, such as incorrect API key, city name, or server errors.

Feel free to explore and enjoy using WeatherForecastTS! If you have any questions or feedback, don't hesitate to reach out.
