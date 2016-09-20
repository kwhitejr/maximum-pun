// basic reducer to set initial state
function setState(state, newState) {
  return Object.assign({}, state, newState);
}

function setToStore(state, data, label) {
  let newObj = {};
  newObj[label] = data;
  return Object.assign({}, state, newObj);
}

export default function(state = {}, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'SET_TO_STORE':
    return setToStore(state, action.data, action.label);
  }
  return state;
}