import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeZipCode } from '../../../store/actions/zipCodes';
import { updateForecast } from '../../../store/actions/weather';
import {
  fetchCurrentConditions,
  fetchForecast,
} from '../../../api/openWeatherMap';
import { Button } from '@material-ui/core';
import ForecastModal from '../ForecastModal/ForecastModal';
import { LocationProps } from './types';

const ZipCode: React.FC<LocationProps> = props => {
  const { text: zip } = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [apiValidZip, setApiValidZip] = useState(true);
  const [name, setName] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [currentConditions, setCurrentConditions] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  async function getUpdatedForecast() {
    const result = await fetchForecast(latitude, longitude);
    dispatch(updateForecast(result));
  }

  // Toggle Forecast Modal. If open, fetch forecast
  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (latitude && longitude) {
      getUpdatedForecast();
    }
  };

  // Get current conditions and forecast for this location
  useEffect(() => {
    fetchCurrentConditions(
      zip,
      setApiValidZip,
      setName,
      setTemperature,
      setCurrentConditions,
      setLatitude,
      setLongitude,
    );
  }, [zip]);

  // Zip Code Validation with Open Weather API
  useEffect(() => {
    if (!apiValidZip) dispatch(removeZipCode(zip));
  }, [apiValidZip, zip, dispatch]);

  if (!name) {
    return <></>;
  }

  const weatherHeader = (
    <div className="clickable" onClick={toggleModal}>
      <span role="img" aria-label="pin">
        📍
      </span>
      {zip}, {name}&nbsp;
      <span role="img" aria-label="thermometer">
        🌡
      </span>
      {temperature}°F, {currentConditions}
    </div>
  );
  const forecastModal = (
    <div onClick={toggleModal}>
      <ForecastModal
        toggleModal={toggleModal}
        isOpen={isOpen}
        weatherHeader={weatherHeader}
      />
    </div>
  );
  const removeZipCodeButton = (
    <div>
      <Button
        onClick={() => {
          dispatch(removeZipCode(zip));
          setIsOpen(false);
        }}
      >
        X
      </Button>
    </div>
  );

  return (
    <div className="zipCode">
      {weatherHeader}
      {forecastModal}
      {removeZipCodeButton}
    </div>
  );
};

export default ZipCode;
