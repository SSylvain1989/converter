import React from 'react';
import PropTypes from 'prop-types';


const Currency = ({ name, onClick, rate }) => (
  <li onClick={onClick} value={name} className="currency">{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Currency;
