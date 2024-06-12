import { Request, Response } from 'express'
import xmljs from 'xml-js';

import { IInformService } from '../services/IInformService';
import { AverageWeatherInfoDto } from '../dto/AverageWeatherInfoDto';


export class WeatherForecastController {
    private informService: IInformService;

    constructor(informService: IInformService) {
        this.informService = informService;
    }

    public getWeatherForecast = async (req: Request, res: Response): Promise<void> => {
        const { city } = req.params;
        const apiKey: string | undefined = req.body.apiKey ? req.body.apiKey : process.env.API_KEY;

        try {
            if (!apiKey) {
                throw { statusCode: 400, message: 'API key is required' };
            }

            const informDto = await this.informService.getForecast(city, apiKey);
            res.json(informDto);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ error: error.message });
        }
    }

    public getWeatherForecastXml = async (req: Request, res: Response): Promise<void> => {
        const { city } = req.params;
        const apiKey: string | undefined = req.body.apiKey ? req.body.apiKey : process.env.API_KEY;

        try {
            if (!apiKey) {
                throw { statusCode: 400, message: 'API key is required' };
            }
            const informDto = await this.informService.getForecast(city, apiKey);
            const xmlData = xmljs.js2xml(informDto, { compact: true, ignoreComment: true, spaces: 4 });

            res.setHeader('Content-Type', 'application/xml');
            res.send(xmlData);
        } catch (error: any) {
            res.status(error.statusCode || 500).json({ error: error.message });
        }
    }

    public GetAverageTempWeatherForecastBetweenCities = async (req: Request, res: Response): Promise<void> => {
        const { firstCity, secondCity } = req.params;
        const apiKey: string | undefined = req.body.apiKey ? req.body.apiKey : process.env.API_KEY;

        try {
            if (!apiKey) {
                throw { statusCode: 400, message: 'API key is required' };
            }

            const informDtoFirst = await this.informService.getForecast(firstCity, apiKey);
            const informDtoSecond = await this.informService.getForecast(secondCity, apiKey);

            res.json(AverageWeatherInfoDto.takeInformationDto(informDtoFirst, informDtoSecond));

        } catch (error: any) {
            res.status(error.statusCode || 500).json({ error: error.message });
        }
    }
}

export default WeatherForecastController;