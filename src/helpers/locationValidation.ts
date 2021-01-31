import { fetchZipCodeValidation } from '../api/googleMaps';
const regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

export async function locationValidation(
  formInput: string,
  zipCodes: Array<{ id: number; text: string }>,
) {
  if (
    zipCodes.findIndex(
      (location: { text: string }) => location.text === formInput,
    ) >= 0
  ) {
    return 'duplicate';
  } else if (!regexp.test(formInput)) {
    return 'invalid';
  } else {
    const validation = await fetchZipCodeValidation(formInput);
    if (validation) {
      return 'valid';
    } else {
      return 'invalid';
    }
  }
}
