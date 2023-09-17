import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

function Button({ fetchLoadMore }) {
  return (
    <button className={css.button} onClick={fetchLoadMore}>
      Load More
    </button>
  );
}

Button.propTypes = {};

export default Button;
