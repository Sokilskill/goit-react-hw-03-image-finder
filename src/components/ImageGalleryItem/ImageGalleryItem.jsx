import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ imagePreview: { webformatURL, tags } }) {
  return (
    <li className={css.imageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css['imageGalleryItem-image']}
        loading="lazy"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  imagePreview: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
