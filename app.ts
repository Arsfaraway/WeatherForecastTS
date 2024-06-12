import express from 'express';
import bodyParser from 'body-parser';
import weatherRouter from './routers/WeatherRouter';
import dotenv from 'dotenv';
import logger from './loggers/Logger';

dotenv.config();

const app = express();
const port = 3001;

app.use(bodyParser.json());

logger.info('The server was running on the port: ' + port);

app.use('/weatherForecast', weatherRouter);

app.listen(port, () => {
    console.log('The server is running on http://localhost:' + port);
});