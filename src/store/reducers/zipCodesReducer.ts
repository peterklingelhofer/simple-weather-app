import { ZipCodesInterface } from '../../shared/interfaces/zipCodes';

export default function zipCodes(state: ZipCodesInterface[] = [], action: any) {
  const { text, type } = action;
  switch (type) {
    case 'ADD_ZIPCODE':
      return [
        ...state,
        {
          id: Math.random(),
          text: text,
        },
      ];
    case 'REMOVE_ZIPCODE':
      const newZipCodes = [...state];
      const index = newZipCodes.findIndex(
        (location: { id: number; text: string }) => location.text === text,
      );
      if (index >= 0) newZipCodes.splice(index, 1);
      return newZipCodes;
    default:
      return state;
  }
}
