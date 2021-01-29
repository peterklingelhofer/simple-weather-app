import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { addZipCode } from '../../../store/actions/zipCodes';
import { fetchZipCodeValidation } from '../../../api/openWeatherMap';

const ZipCodeForm: React.FC = () => {
  const dispatch = useDispatch();
  const [showValidation, setShowValidation] = useState(false);
  const [formValidationSuccess, setFormValidationSuccess] = useState(false);
  const [zipCodeText, setZipCodeText] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    event.preventDefault();
    if (!zipCodeText) return;
    if (regexp.test(zipCodeText)) {
      await fetchZipCodeValidation(
        zipCodeText,
        setFormValidationSuccess,
        setShowValidation,
      );
      dispatch(addZipCode(zipCodeText));
    } else {
      setFormValidationSuccess(false);
      setShowValidation(true);
    }
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setZipCodeText(value);
  };

  const zipCodeInvalid = showValidation && !formValidationSuccess && (
    <div className="redText center">Please provide a valid U.S. zip code.</div>
  );

  const zipCodeValid = showValidation && formValidationSuccess && (
    <div className="greenText center">Valid zip code provided.</div>
  );

  useEffect(() => {
    setShowValidation(false);
  }, [zipCodeText]);

  return (
    <>
      <div className="zipCodeSubmit">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input formControl"
            placeholder="Enter Zip Code"
            onChange={handleInputChange}
          />
        </form>
        {zipCodeInvalid}
        {zipCodeValid}
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
      </div>
    </>
  );
};

export default ZipCodeForm;
