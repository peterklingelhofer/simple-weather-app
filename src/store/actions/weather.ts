export function updateForecast(payload: object | undefined) {
  return {
    type: 'UPDATE_FORECAST',
    payload,
  };
}
export function clearForecast() {
  return {
    type: 'INITIAL_STATE',
  };
}
