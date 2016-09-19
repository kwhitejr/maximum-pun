import reducer from './reducer';

// console logs each action
export default store => next => action => {
  console.log('in middleware', action);
  return next(action);

}