import React from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import { kelvinToFahrenheit } from '../../../utils/conversionHelpers';

interface ForecastModalProps {
  toggleModal: any;
  isOpen: boolean;
  weatherHeader: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

interface Forecast {
  dt: number;
  temp: number;
  humidity: number;
  pressure: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  weather: { main: string; description: string }[];
}

const ForecastModal: React.FC<ForecastModalProps> = props => {
  const forecast = useSelector((state: any) => state.weather);
  const { toggleModal, isOpen, weatherHeader } = props;
  if (!forecast) {
    return <></>;
  }

  const forecastTableBody = forecast[0].hourly.map((row: Forecast) => {
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
      <tbody>
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
      </tbody>
    );
  });

  const forecastTableHead = (
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
  );

  const forecastTable = (
    <div>
      <table className="table">
        {forecastTableHead}
        {forecastTableBody}
      </table>
    </div>
  );

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
      <h1>{weatherHeader}</h1>
      {forecastTable}
    </Modal>
  );
};

export default ForecastModal;
