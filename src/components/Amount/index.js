import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Amount = ({ value, currency }) => {

console.log('value dans Amont: ',value);
console.log('currency dans Amont', currency);

return(
  <div className="amount">
    {/* le résultat de la conversion 1euros / devis Pays  */}
    <p className="amount__value">{value}</p>
    {/* le noms du Pays concernée  */}
    <p className="amount__currency">{currency}</p>
  </div>
)
};

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
