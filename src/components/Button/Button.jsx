import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button() {
  return <button className={css.button}>Load More</button>;
}

Button.propTypes = {};

export default Button;
