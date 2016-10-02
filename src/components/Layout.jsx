import React from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';

import Header from './partials/Header';

import * as actionCreators from '../action_creators';

// TODO: re-label this to Layout and use as template for each page
export const Layout = React.createClass({

  render: function() {
    return <div className="App">
      <Header />
      <div className="App-content">
        {this.props.children}
      </div>
    </div>;
  }
});

function mapStateToProps(state) {
  return state;
}

export const LayoutContainer = connect(mapStateToProps, actionCreators)(Layout);