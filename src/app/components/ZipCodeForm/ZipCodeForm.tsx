import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import ZipCodeValidation from './../ZipCodeValidation/ZipCodeValidation';
import { addZipCode } from '../../../store/actions/zipCodes';
import {
  userInput,
  zipCodeValidation,
} from '../../../store/actions/zipCodeForm';
import { locationValidation } from '../../../utils/locationValidation';
import { ThemeProvider } from '@material-ui/styles';
import { darkTheme } from '../../../styles/theme';
import { ZipCodeFormContainer } from './styled';

const ZipCodeForm: React.FC = () => {
  const dispatch = useDispatch();
  const zipCodes = useSelector((state: any) => state.zipCodes);
  const { formInput } = useSelector((state: any) => state.zipCodeForm);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!formInput) return;
    const validation = await locationValidation(formInput, zipCodes);
    dispatch(zipCodeValidation(validation));
    if (validation === 'valid') dispatch(addZipCode(formInput));
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = ''),
    );
    dispatch(userInput(''));
  };

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;
    dispatch(userInput(value));
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
