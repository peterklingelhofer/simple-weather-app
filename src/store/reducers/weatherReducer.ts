import { WeatherActionTypes } from '../actionTypes';
import { Forecast } from '../../shared/interfaces/forecast';

const initialState: Forecast = {
  index: 0,
  dt: 0,
  temp: 0,
  feels_like: 0,
  pressure: 0,
  humidity: 0,
  dew_point: 0,
  uvi: 0,
  clouds: 0,
  visibility: 0,
  wind_speed: 0,
  wind_deg: 0,
  weather: [],
};

export default function weather(
  state: Forecast = initialState,
  action: { type: WeatherActionTypes; payload: Forecast },
) {
  const { payload, type } = action;
  switch (type) {
    case 'UPDATE_FORECAST':
      return payload;
    default:
      return state;
  }
}
