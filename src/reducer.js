function setState(state, newState) {
  return Object.assign({}, state, newState);
}

function receivePuns(state, puns) {
  return Object.assign({}, state, {
    puns: puns,
    loadingPuns: false
  });
}

function requestPuns(state) {
  return Object.assign({}, state, {
    loadingPuns: true
  });
}

function addPun(state, pun) {
  return Object.assign({}, state, {
    puns: [
      ...state.puns,
      pun
    ]
  });
}

export default function(state = {
  puns: [],
  loadingPuns: true,
}, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  case 'RECEIVE_PUNS':
    return receivePuns(state, action.puns);
  case 'REQUEST_PUNS':
    return requestPuns(state);
  case 'START_PUN_ADD':
    return startPunAdd(state);
  case 'ADD_PUN':
    return addPun(state, action.pun);
  }
  return state;
}