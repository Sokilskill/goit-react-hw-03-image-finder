import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default function Modal(props) {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {};
