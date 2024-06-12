import { WeatherException } from './WeatherException';

export class ErrorRegistry {
    public static cityNotFoundError(city: string): WeatherException {
        return new WeatherException(404, `City '${city}' not found`);
    }

    public static weatherApiError(city: string): WeatherException {
        return new WeatherException(503, `Error while getting weather forecast for city '${city}'`);
    }

    public static internalServerError(): WeatherException {
        return new WeatherException(500, 'Internal server error');
    }
}