import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem(props) {
  return (
    <li className={css.imageGalleryItem}>
      <img src="" alt="" className={css['imageGalleryItem-image']} />
    </li>
  );
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
