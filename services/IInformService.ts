// IInformService.ts
import { WeatherInfoDto } from '../dto/WeatherInfoDto';

export interface IInformService {
    getForecast(city: string, apiKey: string): Promise<WeatherInfoDto>;
}
