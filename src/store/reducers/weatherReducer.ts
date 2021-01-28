export default function weather(state = [], action: any) {
  switch (action.type) {
    case 'UPDATE_FORECAST':
      const { object } = action;
      return [object];
    default:
      return state;
  }
}
