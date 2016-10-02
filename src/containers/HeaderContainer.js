import { connect } from 'react-redux';
import Header from '../components/Header';
import React from 'react';
// import {  } from '../action_creators';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  () => ({}),
  mapStateToProps,
  mapDispatchToProps,
)(HeaderContainer);