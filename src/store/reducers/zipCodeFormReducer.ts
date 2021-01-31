import { ZipCodeFormActionTypes } from '../actionTypes';
import { ZipCodeFormInterface } from '../../shared/interfaces/zipCodeForm';

const initialState: ZipCodeFormInterface = {
  formInput: '',
  zipCodeValidationStatus: '',
};

export default function zipCodeFormReducer(
  state: ZipCodeFormInterface = initialState,
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
