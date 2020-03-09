const initialState = {
  foo: 'bar',
  bar: 'foo',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOMETHING':
      return {
        ...state,
        something: action.data,
      }
    case 'SET_SOMETHING_ELSE':
      return {
        ...state,
        somethingElse: action.data,
      }
    default:
      return state
  }
}
