const initialState = {
  count: 0
};

export default function test(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return Object.assign({}, initialState, {count: state.count + 1})
    case 'DECREMENT':
      return Object.assign({}, initialState, {count: state.count - 1})
    default:
      return state
  }
}