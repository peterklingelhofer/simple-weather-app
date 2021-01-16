import React from 'react';

export default function ZipCode({ zipCode, index, removeZipCode }) {
  const { zip, name, currentConditions, temp } = zipCode;

  // convert temp from Kelvin to Fahrenheit
  const fahrenheit = (((+temp - 273.15) * 9) / 5 + 32).toFixed(2);
  return (
    <div className="zipCode">
      <span role="img" aria-label="pin">
        📍
      </span>
      {zip}, {name}{' '}
      <span role="img" aria-label="thermometer">
        🌡
      </span>
      {fahrenheit}°F, {currentConditions}
      <div>
        <button onClick={() => removeZipCode(index)}>X</button>
      </div>
    </div>
  );
}
