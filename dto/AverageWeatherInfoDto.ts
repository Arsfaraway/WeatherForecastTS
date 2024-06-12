// AverageWeatherInfoDto.ts
import { WeatherInfoDto } from './WeatherInfoDto';

export class AverageWeatherInfoDto {
    averageTemperature?: number;
    firstCity?: WeatherInfoDto;
    secondCity?: WeatherInfoDto;


    static takeInformationDto(oneForecast: WeatherInfoDto, twoForecast: WeatherInfoDto
    ): AverageWeatherInfoDto {

        const oneTemp = oneForecast.celsiusTemperature ?? 0;
        const twoTemp = twoForecast.celsiusTemperature ?? 0;

        return {
            averageTemperature: (oneTemp + twoTemp) / 2,
            firstCity: oneForecast,
            secondCity: twoForecast
        };
    }
}