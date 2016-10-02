import { connect } from 'react-redux';
import PunForm from '../components/PunForm';
import React from 'react';
import { addPun } from '../action_creators';

class PunFormContainer extends React.Component {
  render() {
    return (
      <PunForm {...this.props}/>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addPun: () => dispatch(addPun()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(PunFormContainer);