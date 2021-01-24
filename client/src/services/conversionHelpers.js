// convert temp from Kelvin to Fahrenheit
export const kelvinToFahrenheit = (kelvin) => {
  return (((+kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
}