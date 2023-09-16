import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

function ImageGallery({ children }) {
  return <ul className={css.imageGallery}>{children}</ul>;
}

ImageGallery.propTypes = {};

export default ImageGallery;
