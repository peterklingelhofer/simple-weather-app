import { ZipCodeFormActionTypes } from '../actionTypes';

export interface ZipCodeFormState {
  formInput: string;
  zipCodeValidationStatus: string;
}

const initialState: ZipCodeFormState = {
  formInput: '',
  zipCodeValidationStatus: '',
};

export default function zipCodeFormReducer(
  state: ZipCodeFormState = initialState,
  action: { type: ZipCodeFormActionTypes; payload: string },
) {
  const { type, payload } = action;
  switch (type) {
    case ZipCodeFormActionTypes.UPDATE_INPUT:
      return { ...state, formInput: payload };
    case ZipCodeFormActionTypes.UPDATE_VALIDATION_STATUS:
      return { ...state, zipCodeValidationStatus: payload };
    default:
      return state;
  }
}
