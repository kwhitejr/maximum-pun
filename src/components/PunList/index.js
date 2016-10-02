import React from 'react';
import { Link } from 'react-router';
import Pun from '../Pun';

const PunList = ({puns, onAdd}) => {

  const punNodes = puns.map(pun => (
    <Pun
      key={pun.id}
      {...pun}
    />
  ));

  return (
    <div>
      <ul className="PunList">
        {punNodes}
      </ul>

      <Link
        to='/form'
        className="PunList-button"
      >
        Give a Pun
      </Link>
    </div>
  );
};

PunList.propTypes = {
  puns: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      punText: React.PropTypes.string.isRequired,
      author: React.PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onAdd: React.PropTypes.func.isRequired
};

export default PunList