import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { fetchCurrentConditions } from '../../../api/openWeatherMap';
import { removeZipCode } from '../../../store/actions/zipCodes';
import ForecastModal from './ForecastModal';

interface LocationProps {
  id: number;
  text: string;
}

const ZipCode: React.FC<LocationProps> = props => {
  const { text: zip } = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [currentConditions, setCurrentConditions] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Get current conditions and forecast for this location
  useEffect(() => {
    fetchCurrentConditions(
      zip,
      setName,
      setTemperature,
      setCurrentConditions,
      setLatitude,
      setLongitude,
    );
  }, []);

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
          zip={zip}
          name={name}
          currentConditions={currentConditions}
          temperature={temperature}
          forecast={forecast}
          isOpen={isOpen}
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
