import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Toggler = ({ toggle, isOpen }) => {
  const classnames = isOpen ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      className={classnames}
      type="button"
      onClick={toggle}
    >
      =
    </button>
  );
};

Toggler.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
};

// si jamais on ne met pas la fonction isRequired, on peut passer une fonction par défaut
Toggler.defaultProps = {
  toggle: () => console.log('hello'),
};

export default Toggler;
