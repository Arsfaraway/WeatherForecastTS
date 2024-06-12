import { IInformService } from './IInformService';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Forecast } from '../models/ForecastResponse'
import { WeatherInfoDto } from '../dto/WeatherInfoDto'
import logger from '../loggers/Logger';
import { ErrorRegistry } from '../exceptions/ErrorRegistry';

export class InformService implements IInformService {


    public async getForecast(city: string, apiKey: string): Promise<WeatherInfoDto> {
        let locations: Forecast = {} as Forecast;

       // Использую версию 2.5, потому что 3.0 не работает ни на одном apiUrl
       // const apiKey = process.env.API_KEY;

        const apiUrl: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        try {
            const response: AxiosResponse = await axios.get(apiUrl);
            if (response.status === 200) {
                const responseBody: any = response.data;
                locations = responseBody as Forecast;

                logger.info('City: ' + locations.name);
                logger.info('Timezone: ' + locations.timezone);
                logger.info('Temp: ' + locations.main?.temp);
                logger.info('Pressure: ' + locations.main?.pressure);
                logger.info('Humidity: ' + locations.main?.humidity);
                logger.info('Speed: ' + locations.wind?.speed);
                logger.info('All: ' + locations.clouds?.all);

            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError: AxiosError = error;
                if (axiosError.response?.status === 404) {
                    throw ErrorRegistry.cityNotFoundError(city);
                } else {
                    throw ErrorRegistry.internalServerError();
                }
            } else {
                throw ErrorRegistry.internalServerError();
            }
        }
       

        return WeatherInfoDto.takeInformationDto(locations);
    }
}