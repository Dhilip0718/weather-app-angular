export interface CurrentWeatherDetails {
  coord: Coordinates;
  weather: SubWeatherDetails[];
  main: WeatherDetails;
  wind: WindDetails;
  name: string;
}

export interface WeatherForecastDetails {
  hourly: WeatherDetails[];
}

export interface WeatherDetails {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed?: number;
  weather?: SubWeatherDetails[];
  dt?: number;
  isDayStart?: boolean;
}

export interface SubWeatherDetails {
  description: string;
  icon: string;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface WindDetails {
  speed: number;
  deg: number;
}
