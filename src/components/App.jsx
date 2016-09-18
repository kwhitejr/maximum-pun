import React from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

// import * as actionCreators from '../action_creators';

export const App = React.createClass({

  render: function() {
    return <div>
      <h1>Hello World</h1>
      <h5>Serverside Rendering Branch</h5>
    </div>;
  }
});

function mapStateToProps(state) {
  return state;
}

export const AppContainer = connect(mapStateToProps /*, actionCreators*/)(App);