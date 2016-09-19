// basic reducer to set initial state
function setState(state, newState) {
  return Object.assign({}, state, newState);
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}