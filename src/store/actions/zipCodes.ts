export function addZipCode(text: string | undefined) {
  return {
    type: 'ADD_ZIPCODE',
    text,
  };
}
export function removeZipCode(text: string) {
  return {
    type: 'REMOVE_ZIPCODE',
    text,
  };
}
