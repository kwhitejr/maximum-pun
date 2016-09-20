export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function setToStore(data, label) {
  return {
    type: 'SET_TO_STORE',
    data,
    label
  };
}