import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Loader from '../Loader/Loader';
import NewsApiService from 'api/pixabayAPI';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const newsApiService = new NewsApiService();

export class ImageGallery extends Component {
  state = {
    dataQuery: null,
    loading: false,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      newsApiService.query = this.props.searchQuery;
      newsApiService.resetPageToDefault();
      this.setState({ status: 'pending' });

      try {
        const data = await newsApiService.fetchSearch();
        if (parseInt(data.totalHits) <= 0) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState({
          dataQuery: data.hits,
          status: 'resolve',
        });

        toast(`Hooray! We found ${data.totalHits} images.`);
        // if (data.totalHits > perPage) showEl(btnLoadMoreEl);
      } catch (error) {
        toast.error(`${error}`);
        console.log(error);
        this.setState({
          // dataQuery: null,
          status: 'rejected',
        });
      }
    }
  }

  render() {
    const { dataQuery, status } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolve') {
      return (
        <ul className={css.imageGallery}>
          {dataQuery &&
            dataQuery.map(data => (
              <ImageGalleryItem key={data.id} imagePreview={data} />
            ))}
        </ul>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default ImageGallery;
