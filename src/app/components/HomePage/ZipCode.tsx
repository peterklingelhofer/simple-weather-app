import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { removeZipCode } from '../../../store/actions/zipCodes';
import ForecastModal from './ForecastModal';

interface LocationProps {
  id: number;
  text: string;
}

const ZipCode: React.FC<LocationProps> = props => {
  const { text } = props;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const zipCodeHeader = (
    <div className="clickable" onClick={toggleModal}>
      <span role="img" aria-label="pin">
        📍
      </span>
      {text}
    </div>
  );

  return (
    <div className="zipCode">
      {zipCodeHeader}
      {/* <div onClick={toggleModal}>
        <ForecastModal
          toggleModal={toggleModal}
          zip={zip}
          name={name}
          currentConditions={currentConditions}
          temperature={temperature}
          forecast={forecast}
          isOpen={isOpen}
        />
      </div> */}
      <div>
        <Button
          onClick={() => {
            dispatch(removeZipCode(text));
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
