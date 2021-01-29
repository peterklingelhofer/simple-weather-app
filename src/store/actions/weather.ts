export function updateForecast(payload: object) {
  return {
    type: 'UPDATE_FORECAST',
    payload,
  };
}
