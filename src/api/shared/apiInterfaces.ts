export default interface WeatherCurrentInterface {
  name: string;
  main: { temp: number };
  weather: { main: string }[];
  coord: { lat: number; lon: number };
}

export default interface WeatherForecastInterface {
  hourly: object;
}

export default interface GeolocationInterface {
  results: {
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
  }[];
}
