import React from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import ForecastTable from './ForecastTable';

interface ForecastModalProps {
  toggleModal: any;
  isOpen: boolean;
  weatherHeader: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

const ForecastModal: React.FC<ForecastModalProps> = props => {
  const { toggleModal, isOpen, weatherHeader } = props;

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
      <ForecastTable />
    </Modal>
  );
};

export default ForecastModal;
