import { kelvinToFahrenheit } from '../utils/temperatureConversion';
import WeatherForecastInterface from './shared/apiInterfaces';
import WeatherCurrentInterface from './shared/apiInterfaces';
const openWeatherMapAPI = 'https://api.openweathermap.org/data/2.5';

// Get current weather conditions with Zip Code
export async function fetchCurrentConditions(
  zip: string,
  setApiValidZip: Function,
  setName: Function,
  setTemperature: Function,
  setCurrentConditions: Function,
  setLatitude: Function,
  setLongitude: Function,
) {
  const url = `${openWeatherMapAPI}/weather?zip=${zip}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const result: WeatherCurrentInterface = await response.json();
    setName(result.name);
    setTemperature(kelvinToFahrenheit(result.main.temp));
    setCurrentConditions(result.weather[0].main);
    setLatitude(+result.coord.lat);
    setLongitude(+result.coord.lon);
  } else {
    setApiValidZip(false);
  }
}

// Get weather forecast with coordinates
export async function fetchForecast(lat: number, lng: number) {
  const url = `${openWeatherMapAPI}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    const result: WeatherForecastInterface = await response.json();
    const { hourly } = result;
    return hourly;
  } else {
    console.error('Error retrieving forecast');
  }
}
