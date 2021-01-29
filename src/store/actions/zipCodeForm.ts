export function userInput(payload: string) {
  return {
    type: 'UPDATE_INPUT',
    payload,
  };
}
export function zipCodeValidation(payload: string) {
  return {
    type: 'UPDATE_VALIDATION_STATUS',
    payload,
  };
}
