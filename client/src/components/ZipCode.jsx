import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ForecastModal from './ForecastModal.jsx';

export default function ZipCode({ zipCode, removeZipCode }) {
  const { zip, name, currentConditions, temp, forecast } = zipCode;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // convert temp from Kelvin to Fahrenheit
  const temperature = (((+temp - 273.15) * 9) / 5 + 32).toFixed(2);
  return (
    <div className="zipCode">
      <div className="clickable" onClick={toggleModal}>
        <span role="img" aria-label="pin">
          📍
        </span>
        {zip}, {name}{' '}
        <span role="img" aria-label="thermometer">
          🌡
        </span>
        {temperature}°F, {currentConditions}
      </div>
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
            removeZipCode(zip);
            setIsOpen(false);
          }}
        >
          X
        </Button>
      </div>
    </div>
  );
}
