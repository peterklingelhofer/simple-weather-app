import { ZipCodesInterface } from '../../shared/interfaces/zipCodes';

export default function zipCodes(state: ZipCodesInterface[] = [], action: any) {
  const { text, type } = action;
  const index = state.findIndex(
    (location: { id: number; text: string }) => location.text === text,
  );
  if (type === 'ADD_ZIPCODE' && index < 0) {
    return [
      ...state,
      {
        id: Math.random(),
        text: text,
      },
    ];
  } else if (type === 'REMOVE_ZIPCODE' && index >= 0) {
    const remainingZipCodes = [...state];
    remainingZipCodes.splice(index, 1);
    return remainingZipCodes;
  } else {
    return state;
  }
}
