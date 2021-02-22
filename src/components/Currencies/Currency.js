import React from 'react';
import PropTypes from 'prop-types';

const Currency = ({ name, onClick }) =>

  (
    <li onClick={onClick} value={name} className="currency">{name}</li>
  );
Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Currency;
