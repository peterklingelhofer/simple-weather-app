import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';

export default function ForecastModal({
  zip,
  name,
  currentConditions,
  temperature,
  forecast,
  toggleModal,
  isOpen,
}) {
  console.log(forecast);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Forecast Modal"
      ariaHideApp={false}
    >
      <Button onClick={toggleModal}>Close</Button>
      <h2>
        Forecast for{' '}
        <span role="img" aria-label="pin">
          📍
        </span>
        {zip}, {name}{' '}
        <span role="img" aria-label="thermometer">
          🌡
        </span>
        {temperature}°F, {currentConditions}
      </h2>
      {/* <div>{JSON.stringify(forecast)}</div> */}
      {/* <div>{JSON.stringify(forecast)}</div> */}
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Datetime</th>
                <th>Temperature</th>
                <th>Humidity</th>
                <th>Pressure</th>
                <th>Clouds</th>
                <th>Wind speed</th>
                <th>Wind degree</th>
                <th>Weather</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {forecast.hourly.map((row) => {
                return (
                  <tr>
                    <td>{row.dt}</td>
                    <td>{(((+row.temp - 273.15) * 9) / 5 + 32).toFixed(2)}°F</td>
                    <td>{row.humidity}%</td>
                    <td>{row.pressure} atm</td>
                    <td>{row.clouds} %</td>
                    <td>{row.wind_speed} m/s</td>
                    <td>{row.wind_deg}°</td>
                    <td>{row.weather[0].main}</td>
                    <td>{row.weather[0].description}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
}
