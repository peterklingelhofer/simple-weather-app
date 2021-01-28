import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeZipCode } from '../../../store/actions/zipCodes';
import { updateForecast } from '../../../store/actions/weather';
import {
  fetchCurrentConditions,
  fetchForecast,
} from '../../../api/openWeatherMap';
import { Button } from '@material-ui/core';
import ForecastModal from './ForecastModal';

interface LocationProps {
  id: number;
  text: string;
}

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

  const forecast = useSelector((state: any) => state.weather);
  async function getUpdatedForecast() {
    const result = await fetchForecast(latitude, longitude);
    dispatch(updateForecast(result));
  }

  // Toggle Forecast Modal. If open, fetch forecast
  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (isOpen && latitude && longitude) {
      getUpdatedForecast();
    }
    console.table(forecast);
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
  }, []);

  // Zip Code Validation with Open Weather API
  useEffect(() => {
    if (!apiValidZip) dispatch(removeZipCode(zip));
  }, [apiValidZip]);

  if (!name) {
    return <></>;
  }

  const zipCodeHeader = (
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

  return (
    <div className="zipCode">
      {zipCodeHeader}
      <div onClick={toggleModal}>
        {/* <ForecastModal
          toggleModal={toggleModal}
          isOpen={isOpen}
          forecast={forecast}
          zipCodeHeader={zipCodeHeader}
          latitude={latitude}
          longitude={longitude}
        /> */}
      </div>
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
    </div>
  );
};

export default ZipCode;
