import React from 'react';
import Modal from 'react-modal';

export default function ForecastModal({
  zip,
  name,
  currentConditions,
  temperature,
  forecast,
  toggleModal,
  isOpen,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Forecast Modal"
      ariaHideApp={false}
    >
      <button onClick={toggleModal}>Close</button>
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
      <div>{JSON.stringify(forecast)}</div>
    </Modal>
  );
}
