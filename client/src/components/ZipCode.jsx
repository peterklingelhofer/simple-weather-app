import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ForecastModal from './ForecastModal.jsx';
import { kelvinToFahrenheit } from '../services/conversionHelpers';

export default function ZipCode({
  zipCode,
  removeZipCode,
  zipCodes,
  setZipCodes,
}) {
  const { zip, name, currentConditions, temp, forecast } = zipCode;
  if (!temp) { 
    return (<div />)
  }
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
      setIsOpen(!isOpen);
    };

    const temperature = kelvinToFahrenheit(temp);

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
          <ForecastModal
            toggleModal={toggleModal}
            zip={zip}
            name={name}
            currentConditions={currentConditions}
            temperature={temperature}
            forecast={forecast}
            isOpen={isOpen}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              removeZipCode(zip, zipCodes, setZipCodes);
              setIsOpen(false);
            }}
          >
            X
          </Button>
        </div>
      </div>
    );
};
