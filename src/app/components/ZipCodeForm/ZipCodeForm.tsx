import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import ZipCodeValidation from './../ZipCodeValidation/ZipCodeValidation';
import { addZipCode } from '../../../store/actions/zipCodes';
import {
  userInput,
  zipCodeValidation,
  showValidation,
} from '../../../store/actions/zipCodeForm';
import { fetchZipCodeValidation } from '../../../api/openWeatherMap';

const ZipCodeForm: React.FC = () => {
  const dispatch = useDispatch();
  const zipCodes = useSelector((state: any) => state.zipCodes);
  const { formInput } = useSelector((state: any) => state.zipCodeForm);

  const handleSubmit = async (event: FormEvent) => {
    const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    event.preventDefault();
    if (!formInput) return;
    dispatch(showValidation(true));
    if (
      zipCodes.findIndex(
        (location: { text: string }) => location.text === formInput,
      ) >= 0
    ) {
      dispatch(zipCodeValidation('duplicate'));
    } else if (!regexp.test(formInput)) {
      dispatch(zipCodeValidation('invalid'));
    } else {
      if (await fetchZipCodeValidation(formInput)) {
        dispatch(zipCodeValidation('valid'));
      } else {
        dispatch(zipCodeValidation('invalid'));
      }
      dispatch(addZipCode(formInput));
    }
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
    <Button type="submit" onClick={handleSubmit}>
      Add
    </Button>
  );

  useEffect(() => {
    formInput &&
      dispatch(showValidation(false)) &&
      dispatch(zipCodeValidation(''));
  }, [formInput, dispatch]);

  return (
    <div className="zipCodeSubmit">
      {zipCodeSubmitForm}
      <ZipCodeValidation />
      {zipCodeAddButton}
    </div>
  );
};

export default ZipCodeForm;
