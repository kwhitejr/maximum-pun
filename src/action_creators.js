const deezPunz = [
  {
    id: 1,
    punText: 'asldkfjasl;dkjfals;jkda',
    author: 'Tony'
  },
  {
    id: 2,
    punText: 'asldkfjasl;dkjfals;jkda',
    author: 'Jesse'
  },
  {
    id: 3,
    punText: 'asldkfjasl;dkjfals;jkda',
    author: 'Kevin'
  },
  {
    id: 4,
    punText: 'asldkfjasl;dkjfals;jkda',
    author: 'Jonein'
  }
];

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function requestPuns() {
  return (dispatch) => {
    dispatch({
      type: 'REQUEST_PUNS'
    });

    // fetch('')
    //   // .then((response) => response.json())
    //   .then((puns) => dispatch(receivePuns(puns)));
    dispatch(receivePuns(deezPunz));
  };
}

export function receivePuns(puns) {
  return {
    type: 'RECEIVE_PUNS',
    puns
  };
}

export function addPun() {
  return (dispatch, getState) => {
    const form = getState().form;
    const pun = {
      punText: form.pun.punText.value,
      author: form.pun.author.value
    };
    dispatch({
      type: 'ADD_PUN',
      pun
    });
  };
}