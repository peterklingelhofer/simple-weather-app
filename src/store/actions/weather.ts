export function updateForecast(object: object) {
  return {
    type: 'UPDATE_FORECAST',
    object,
  };
}
