import React from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import { kelvinToFahrenheit } from '../services/conversionHelpers';

export default function ForecastModal({
  zip,
  name,
  currentConditions,
  temperature,
  forecast,
  toggleModal,
  isOpen,
}) {
  const forecastHeader = (
    <h2>
      Hourly Forecast for&nbsp;
      <span role="img" aria-label="pin">
        📍
      </span>
      {zip}, {name}&nbsp;
      <span role="img" aria-label="thermometer">
        🌡
      </span>
      {temperature}°F, {currentConditions}
    </h2>
  );

  const forecastTable = (
    <div>
      <table className="table">
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
            const {
              dt,
              temp,
              humidity,
              pressure,
              clouds,
              wind_speed: windSpeed,
              wind_deg: windDegree,
              weather,
            } = row;
            return (
              <tr key={dt.toString()}>
                <td>{new Date(dt * 1000).toString()}</td>
                <td>{kelvinToFahrenheit(temp)}°F</td>
                <td>{humidity}%</td>
                <td>{pressure} atm</td>
                <td>{clouds} %</td>
                <td>{windSpeed} m/s</td>
                <td>{windDegree}°</td>
                <td>{weather[0].main}</td>
                <td>{weather[0].description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  
  if (!forecast) {
    return <div />;
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Forecast Modal"
      ariaHideApp={false}
    >
      <Button className="modalButton" onClick={toggleModal}>
        Close
      </Button>
      {forecastHeader}
      <div>{forecastTable}</div>
    </Modal>
  );
}
