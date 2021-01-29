import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { addZipCode } from '../../../store/actions/zipCodes';
import { fetchZipCodeValidation } from '../../../api/openWeatherMap';

const ZipCodeForm: React.FC = () => {
  const dispatch = useDispatch();
  const [showValidation, setShowValidation] = useState(false);
  const [zipCodeValidationStatus, setZipCodeValidationStatus] = useState('');
  const [zipCodeText, setZipCodeText] = useState('');
  const zipCodes = useSelector((state: any) => state.zipCodes);

  const handleSubmit = async (event: FormEvent) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    event.preventDefault();
    if (!zipCodeText) return;
    if (
      zipCodes.findIndex(
        (location: { text: string }) => location.text === zipCodeText,
      ) >= 0
    ) {
      setShowValidation(true);
      setZipCodeValidationStatus('duplicate');
    } else if (!regexp.test(zipCodeText)) {
      setZipCodeValidationStatus('invalid');
      setShowValidation(true);
    } else {
      await fetchZipCodeValidation(
        zipCodeText,
        setZipCodeValidationStatus,
        setShowValidation,
      );
      dispatch(addZipCode(zipCodeText));
    }
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
    setZipCodeText('');
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setZipCodeText(value);
  };

  const zipCodeSubmitForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input formControl"
        placeholder="Enter Zip Code"
        onChange={handleInputChange}
      />
    </form>
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
        <div className="blueText center">Duplicate zip code entered.</div>
      );
      break;
    default:
      zipCodeValidation = <></>;
  }

  const zipCodeAddButton = (
    <Button type="submit" onClick={handleSubmit}>
      Add
    </Button>
  );

  useEffect(() => {
    zipCodeText && setShowValidation(false);
  }, [zipCodeText]);

  return (
    <div className="zipCodeSubmit">
      {zipCodeSubmitForm}
      {showValidation && zipCodeValidation}
      {zipCodeAddButton}
    </div>
  );
};

export default ZipCodeForm;
