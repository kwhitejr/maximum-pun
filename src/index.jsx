/*
This is the entry point for webpack. Nothing from index actually gets rendered, but it sets up React, React-Router, Redux, and more. Need to import .CSS and .SCSS files here as well.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, hashHistory } from 'react-router';

import reducer from './reducer';
import routes from './routes';
import remoteActionMiddleware from './remote_action_middleware';

import { AppContainer } from './components/App';

import './static/styles/styles.scss';

// DevTools allow use of Chrome's Redux plugin
const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

// 1. thunk middleware allows asynchronous actions from the action_creator
// 2. remoteActionMiddleware (for now) allows action tracking (each one creates a console log)
const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  remoteActionMiddleware
)(createStoreDevTools);
const store = createStoreWithMiddleWare(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);