import React from 'react';
import { Link } from 'react-router';
import { ContactForm } from '../forms/SubmitPunForm';

export default class PunPage extends React.Component {


  render() {
    const id = this.props.params.id;
    return (
      <div className="not-found">
        <h1>This is the Pun Page</h1>
        <h2>id = {id}</h2>
        <p>
          <Link to="/">« Back to the index</Link>
        </p>
      </div>
    );
  }
}