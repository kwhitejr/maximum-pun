import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, hashHistory, Redirect } from 'react-router';

import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';

import { AppContainer } from './components/App';

import './styles/styles.scss';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  remoteActionMiddleware
)(createStoreDevTools);
const store = createStoreWithMiddleWare(reducer);

const routes = <Route>
  <Route path="/" component={AppContainer} >
  </Route>
</Route>


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);