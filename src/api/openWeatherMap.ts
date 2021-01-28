import { kelvinToFahrenheit } from '../utils/conversionHelpers';
const openWeatherMapAPI = 'https://api.openweathermap.org/data/2.5';

// Get current weather conditions with Zip Code
export async function fetchCurrentConditions(
  zip: string | number,
  setName: Function,
  setTemperature: Function,
  setCurrentConditions: Function,
  setLatitude: Function,
  setLongitude: Function,
) {
  const url = `${openWeatherMapAPI}/weather?zip=${zip}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  await fetch(url)
    .then(response => response.json())
    .then(result => {
      // console.table(result);
      setName(result.name);
      setTemperature(kelvinToFahrenheit(result.main.temp));
      setCurrentConditions(result.weather[0].main);
      setLatitude(+result.coord.lat);
      setLongitude(+result.coord.lon);
    })
    .catch(error => console.log('error', error));
}

export async function fetchForecast(lat: number, lng: number) {
  // Hourly
  // `${openWeatherMapAPI}/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`

  // Daily
  const url = `${openWeatherMapAPI}/forecast/daily?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY}`;
  return fetch(url);
}
