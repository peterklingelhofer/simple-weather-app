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
    default:
      return state;
  }
}
