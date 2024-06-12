export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
}

export interface Rain {
    _1h: number;
}

export interface Weather {
    id: number;
    main?: string;
    description?: string;
    icon?: string;
}

export interface Wind {
    speed: number;
    deg: number;
    gust: number;
}

export interface Sys {
    type: number;
    id: number;
    country?: string;
    sunrise: number;
    sunset: number;
}

export interface Forecast {
    coord?: Coord;
    weather?: Weather[];
    base?: string;
    main?: Main;
    visibility: number;
    wind?: Wind;
    rain?: Rain;
    clouds?: Clouds;
    dt: number;
    sys?: Sys;
    timezone: number;
    id: number;
    name?: string;
    cod: number;
}
