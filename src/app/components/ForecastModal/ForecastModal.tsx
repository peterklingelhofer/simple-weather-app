import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import ForecastTable from '../ForecastTable/ForecastTable';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from '../../../styles/theme';
import { ForecastModalInterface } from './types';

const ForecastModal: React.FC<ForecastModalInterface> = props => {
  const { toggleModal, isOpen, weatherHeader } = props;
  const modalCloseButton = (
    <ThemeProvider theme={darkTheme}>
      <Button className="floatRight" onClick={toggleModal}>
        Close
      </Button>
    </ThemeProvider>
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      contentLabel="Forecast Modal"
      ariaHideApp={false}
    >
      {modalCloseButton}
      <h1 className="whiteText">{weatherHeader}</h1>
      <ForecastTable />
    </Modal>
  );
};

export default ForecastModal;
