import React from 'react';
import { Link } from 'react-router';
import './styles.css';
import { reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {};

  if (!values.punText) {
    errors.punText = 'Please provide a pun.';
  }

  if (!values.author) {
    errors.author = 'Please provide an author name.';
  }

  return errors;
};

const PunForm = ({ addPun, fields: { punText, author }, handleSubmit}) => {
  return (
    <div>
    <form
      className="PunForm-form"
      onSubmit={handleSubmit(addPun)}
    >
      <div>
        <input
          type="text"
          placeholder="Enter pun..."
          className="PunForm-input"
          {...punText}
        />
        {punText.touched && punText.error && <div className="PunForm-error">{punText.error}</div>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter author..."
          className="PunForm-input"
          {...author}
        />
        {author.touched && author.error && <div className="PunForm-error">{author.error}</div>}
      </div>
      <button
        type="submit"
        className="PunForm-button"
        href="/"
      >
        Submit
      </button>
    </form>
    <Link
      to='/'
      className="PunList-button"
    >
      Return to Main
    </Link>
    </div>
  );
}

export default reduxForm({
  form: 'pun',
  fields: ['punText', 'author'],
  validate
})(PunForm);