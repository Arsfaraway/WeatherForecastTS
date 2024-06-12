import express, { Router } from 'express';
import { WeatherForecastController } from '../controllers/WeatherController';
import { InformService } from '../services/InformServiceImpl';

const router: Router = express.Router();


const informService = new InformService();
const weatherForecastController = new WeatherForecastController(informService);

router.get('/cities/:city', weatherForecastController.getWeatherForecast);
router.get('/xml/cities/:city', weatherForecastController.getWeatherForecastXml);
router.get('/cities/:firstCity/:secondCity', weatherForecastController.GetAverageTempWeatherForecastBetweenCities);


export default router;

