export interface Forecast {
  index: number;
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
}
