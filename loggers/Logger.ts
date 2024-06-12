import winston from 'winston';


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json() 
    ),
    transports: [
        new winston.transports.Console()
    ]
});

if (process.env.NODE_ENV === 'development') {
    logger.level = 'debug';
}

export default logger;
 