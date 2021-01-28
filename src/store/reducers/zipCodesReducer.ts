interface Location {
  id: number;
  text: string;
}

export default function zipCodes(state = [], action: any) {
  switch (action.type) {
    case 'ADD_ZIPCODE':
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text,
        },
      ];
    case 'REMOVE_ZIPCODE':
      const newZipCodes = [...state];
      const index = newZipCodes.findIndex(
        (location: Location) => location.text === action.text,
      );
      if (index >= 0) newZipCodes.splice(index, 1);
      return newZipCodes;
    default:
      return state;
  }
}
