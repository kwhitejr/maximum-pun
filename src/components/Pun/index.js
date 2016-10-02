import React from 'react';
import './styles.css';

const Pun = ({ punText, author }) => {
  return (
    <li className="Pun-item">
      {punText}<br/>
      Author: {author}
    </li>
  );
};

Pun.propTypes = {
  punText: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired
};

export default Pun;