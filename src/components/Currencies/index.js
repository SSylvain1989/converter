import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

const Currencies = ({ currencies, onClick }) => {
  // const { currencies } = props;
  // eslint-disable-next-line arrow-body-style
  const currenciesList = currencies.map((currency) => {
    return (
      <Currency
        key={currency.name}
        name={currency.name}
        rate={currency.rate}
        onClick={onClick}
      />
    );
  });

  return (
    <div className="currencies">
      <div className="currencies__title">Currencies</div>
      <ul className="currencies__list">
        {currenciesList}
      </ul>
    </div>
  );
};

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    // pour décrire la forme de chaque objet contenu dans le tableau
    // on passe par la fonction shape() de PropTypes, elle prend un objet
    // en argument et on vient décrire le type de chaque propriété
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Currencies;
