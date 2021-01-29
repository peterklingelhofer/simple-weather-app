export interface Forecast {
  dt: number;
  temp: number;
  humidity: number;
  pressure: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  weather: { main: string; description: string }[];
}
