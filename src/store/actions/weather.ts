export function updateForecast(payload: object | undefined) {
  return {
    type: 'UPDATE_FORECAST',
    payload,
  };
}
export function resetForecast() {
  return {
    type: 'INITIAL_STATE',
  };
}
