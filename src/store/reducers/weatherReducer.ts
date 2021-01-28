interface Forecast {
  id: number;
  object: object;
}

export default function weather(state = [], action: any) {
  switch (action.type) {
    case 'UPDATE_FORECAST':
      const newForecast = [...state];
      const index = newForecast.findIndex(
        (forecast: Forecast) => forecast.id === 0,
      );
      if (index >= 0) newForecast.splice(index, 1);
      return [
        ...newForecast,
        {
          id: 0,
          object: action.object,
        },
      ];
    default:
      return state;
  }
}
