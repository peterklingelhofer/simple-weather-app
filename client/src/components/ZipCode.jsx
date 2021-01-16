import React, { useState } from 'react';
// import Modal from 'react-modal';
import ForecastModal from './ForecastModal.jsx';

export default function ZipCode({ zipCode, index, removeZipCode }) {
  const { zip, name, currentConditions, temp, forecast } = zipCode;
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // convert temp from Kelvin to Fahrenheit
  const temperature = (((+temp - 273.15) * 9) / 5 + 32).toFixed(2);
  return (
    <div onClick={toggleModal} className="zipCode">
      <span role="img" aria-label="pin">
        📍
      </span>
      {zip}, {name}{' '}
      <span role="img" aria-label="thermometer">
        🌡
      </span>
      {temperature}°F, {currentConditions}
      <div>
        <button onClick={() => removeZipCode(index)}>X</button>
      </div>
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
  );
}
