export default function weather(state = [], action: any) {
  const { object, type } = action;
  switch (type) {
    case 'UPDATE_FORECAST':
      return [object];
    default:
      return state;
  }
}
