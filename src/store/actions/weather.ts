export function updateForecast(payload: object | undefined) {
  return {
    type: 'UPDATE_FORECAST',
    payload,
  };
}
