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

export function handleSubmit(formObj) {
  return {
    type: 'HANDLE_SUBMIT',
    formObj
  };
}