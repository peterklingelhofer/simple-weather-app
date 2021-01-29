import { ZipCodeFormActionTypes } from '../actionTypes';

export interface ZipCodeFormState {
  formInput: string;
  zipCodeValidationStatus: string;
  showZipCodeValidation: boolean;
}

const initialState: ZipCodeFormState = {
  formInput: '',
  zipCodeValidationStatus: '',
  showZipCodeValidation: false,
};

export default function zipCodeFormReducer(
  state: ZipCodeFormState = initialState,
  action: { type: ZipCodeFormActionTypes; payload: string | boolean },
) {
  const { type, payload } = action;
  switch (type) {
    case ZipCodeFormActionTypes.UPDATE_INPUT:
      return { ...state, formInput: payload };
    case ZipCodeFormActionTypes.UPDATE_VALIDATION_STATUS:
      return { ...state, zipCodeValidationStatus: payload };
    case ZipCodeFormActionTypes.UPDATE_VALIDATION_VISIBILITY:
      return { ...state, showZipCodeValidation: payload };
    default:
      return state;
  }
}
