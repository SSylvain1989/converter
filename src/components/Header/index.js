import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({ baseAmount, changeEuroAmont }) => {
  console.log(baseAmount);

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <input
        className="header__base-amount"
        type="text"
        value={baseAmount}
        placeholder="Renseigner un montant en Euro"
        onChange={changeEuroAmont}
      />
    </header>
  )
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
