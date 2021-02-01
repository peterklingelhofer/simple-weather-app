import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeZipCode } from '../../../store/actions/zipCodes';
import { updateForecast, resetForecast } from '../../../store/actions/weather';
import {
  fetchCurrentConditions,
  fetchForecast,
} from '../../../api/openWeatherMap';
import { Button } from '@material-ui/core';
import ForecastModal from '../ForecastModal/ForecastModal';
import WeatherConditionsIcon from '../WeatherConditionsIcon/WeatherConditionsIcon';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from '../../../styles/theme';
import { ZipCodesInterface } from '../../../shared/interfaces/zipCodes';
import { ZipCodeContainer } from './styled';

const ZipCode: React.FC<ZipCodesInterface> = props => {
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
    dispatch(resetForecast());
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
    <div className="clickable whiteText" onClick={toggleModal}>
      <WeatherConditionsIcon conditions={currentConditions} />
      &nbsp;&nbsp;{zip},&nbsp;{name}&nbsp;
      <span role="img" aria-label="thermometer">
        🌡
      </span>
      {temperature}&deg;F,&nbsp;
      <span className="capitalize">{currentConditions}</span>&nbsp;
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
    <ThemeProvider theme={darkTheme}>
      <Button
        onClick={() => {
          dispatch(removeZipCode(zip));
          setIsOpen(false);
        }}
      >
        X
      </Button>
    </ThemeProvider>
  );

  return (
    <ZipCodeContainer>
      <div className="zipCode">
        {weatherHeader}
        {forecastModal}
        {removeZipCodeButton}
      </div>
    </ZipCodeContainer>
  );
};

export default ZipCode;
