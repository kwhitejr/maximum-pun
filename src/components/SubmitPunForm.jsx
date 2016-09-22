import React, {Component} from 'react';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';

import * as actionCreators from '../action_creators';

class ContactForm extends Component {

  render() {
    const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" placeholder="First Name" {...firstName}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" {...lastName}/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" {...email}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({ // <----- THIS IS THE IMPORTANT PART!
  form: 'contact',                           // a unique name for this form
  fields: ['firstName', 'lastName', 'email'] // all the fields in your form
})(ContactForm);

function mapStateToProps(state) {
  return state.reducer;
}

export const ContactFormContainer = connect(mapStateToProps, actionCreators)(ContactForm);


// export const AppContainer = connect(mapStateToProps, actionCreators)(App);