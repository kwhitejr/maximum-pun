import React from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

// import * as actionCreators from '../action_creators';

// TODO: re-label this to Layout and use as template for each page
const App = React.createClass({

  render: function() {
    return <div>
      {this.props.children}
    </div>;
  }
});

function mapStateToProps(state) {
  return state;
}

export const AppContainer = connect(mapStateToProps /*, actionCreators*/)(App);