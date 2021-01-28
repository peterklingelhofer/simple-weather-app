import { kelvinToFahrenheit } from '../utils/conversionHelpers';
const openWeatherMapAPI = 'https://api.openweathermap.org/data/2.5';

// Zip Code Validation
export async function fetchZipCodeValidation(
  zip: string | number,
  setApiValidZip: Function,
) {
  const url = `${openWeatherMapAPI}/weather?zip=${zip}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  const response = await fetch(url);
  if (response.ok) {
    setApiValidZip(true);
  } else {
    setApiValidZip(false);
  }
}

// Get current weather conditions with Zip Code
export async function fetchCurrentConditions(
  zip: string | number,
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
    const result = await response.json();
    setName(result.name);
    setTemperature(kelvinToFahrenheit(result.main.temp));
    setCurrentConditions(result.weather[0].main);
    setLatitude(+result.coord.lat);
    setLongitude(+result.coord.lon);
  } else {
    setApiValidZip(false);
  }
}

export async function fetchForecast(lat: number, lng: number) {
  // Hourly
  // const url = `${openWeatherMapAPI}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`
  // Daily
  const url = `${openWeatherMapAPI}/forecast/daily?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  // const response = await fetch(url);
  // if (response.ok) {
  //   const result = await response.json();
  // } else {
  //   console.error('Error retrieving forecast')
  // }
  return fetch(url);
}
