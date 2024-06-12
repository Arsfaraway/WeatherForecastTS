import { Forecast } from '../models/ForecastResponse';
import { Time } from '../mapping/Time ';

export class WeatherInfoDto {
    public city?: string;
    public cityCurrentTime?: string; // Date
    public serverCurrentTime?: string; // Date
    public timeDifferenceBetweenCityAndServer?: string;
    public celsiusTemperature?: number;
    public atmosphericPressure?: number;
    public airHumidity?: number;
    public windSpeed?: number;
    public cloudCover?: number;

    public static takeInformationDto(forecast: Forecast): WeatherInfoDto {
        if (!forecast.main || !forecast.wind) {
            throw new Error('Нет данных о погоде');
        }

        return {
            city: forecast.name,
            cityCurrentTime: Time.CityTime(forecast.timezone),
            serverCurrentTime: Time.ServerTime(),
            timeDifferenceBetweenCityAndServer: Time.DiffCityServer(Time.CityTime(forecast.timezone), Time.ServerTime()),
            celsiusTemperature: Math.round(forecast.main.temp - 273.15),
            atmosphericPressure: forecast.main?.pressure,
            airHumidity: forecast.main?.humidity,
            windSpeed: Math.round(forecast.wind.speed * 10) / 10,
            cloudCover: forecast.clouds?.all
        };
    }
}
