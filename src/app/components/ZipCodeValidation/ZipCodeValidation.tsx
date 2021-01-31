import React from 'react';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '../../../shared/interfaces/rootState';

const ZipCodeValidation: React.FC = () => {
  const { zipCodeValidationStatus } = useSelector(
    (state: RootStateInterface) => state.zipCodeForm,
  );

  let zipCodeValidation: JSX.Element;
  switch (zipCodeValidationStatus) {
    case 'valid':
      zipCodeValidation = (
        <div className="greenText center">Valid zip code provided.</div>
      );
      break;
    case 'invalid':
      zipCodeValidation = (
        <div className="redText center">
          Please provide a valid U.S. zip code.
        </div>
      );
      break;
    case 'duplicate':
      zipCodeValidation = (
        <div className="yellowText center">Duplicate zip code entered.</div>
      );
      break;
    default:
      zipCodeValidation = <></>;
  }

  return zipCodeValidation;
};

export default ZipCodeValidation;
