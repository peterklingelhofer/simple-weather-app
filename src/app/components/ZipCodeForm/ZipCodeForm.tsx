import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import ZipCodeValidation from './../ZipCodeValidation/ZipCodeValidation';
import { addZipCode } from '../../../store/actions/zipCodes';
import {
  userInput,
  zipCodeValidation,
} from '../../../store/actions/zipCodeForm';
import { locationValidation } from '../../../helpers/locationValidation';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from '../../../styles/theme';
import { ZipCodeFormContainer } from './styled';
import { ZipCodeFormInterface } from '../../../shared/interfaces/zipCodeForm';
import { ZipCodesInterface } from '../../../shared/interfaces/zipCodes';

const ZipCodeForm: React.FC = () => {
  const dispatch = useDispatch();
  const { zipCodes, zipCodeForm } = useSelector(
    (state: {
      zipCodes: ZipCodesInterface[];
      zipCodeForm: ZipCodeFormInterface;
    }) => state,
  );
  const { formInput, zipCodeValidationStatus } = zipCodeForm;

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    dispatch(userInput(value));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formInput) return;
    const validation = await locationValidation(formInput, zipCodes);
    dispatch(zipCodeValidation(validation));
    validationStatusReset();
    if (validation === 'valid') dispatch(addZipCode(formInput));
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
    dispatch(userInput(''));
  };

  // Prevent validation status from being cleared if another action has been performed by user in last six seconds
  const validationStatusReset = () => {
    let tempZipCodeValidationStatus = zipCodeValidationStatus;
    setTimeout(() => {
      tempZipCodeValidationStatus === zipCodeValidationStatus
        ? dispatch(zipCodeValidation(''))
        : (tempZipCodeValidationStatus = zipCodeValidationStatus);
    }, 6000);
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

  const zipCodeAddButton = (
    <ThemeProvider theme={darkTheme}>
      <Button type="submit" onClick={handleSubmit}>
        Add
      </Button>
    </ThemeProvider>
  );

  useEffect(() => {
    formInput && dispatch(zipCodeValidation(''));
  }, [formInput, dispatch]);

  return (
    <ZipCodeFormContainer>
      <div className="zipCodeSubmit">
        {zipCodeSubmitForm}
        <ZipCodeValidation />
        {zipCodeAddButton}
      </div>
      <div className="formSpacerBottom" />
    </ZipCodeFormContainer>
  );
};

export default ZipCodeForm;
