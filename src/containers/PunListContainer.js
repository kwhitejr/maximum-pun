import { connect } from 'react-redux';
import PunList from '../components/PunList';
import React from 'react';
import { requestPuns, startPunAdd } from '../action_creators';

class PunListContainer extends React.Component {
  componentWillMount() {
    if (!this.props.puns || !this.props.puns.length) {
      this.props.requestPuns();
    }
  }

  render() {
    return (
      <PunList {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  puns: state.main.puns
});

const mapDispatchToProps = (dispatch) => ({
  requestPuns: () => dispatch(requestPuns()),
  onAdd: () => dispatch(startPunAdd)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PunListContainer);