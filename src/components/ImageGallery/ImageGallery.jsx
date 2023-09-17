import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import { toast } from 'react-toastify';

import Loader from '../Loader/Loader';

import NewsApiService from 'api/pixabayAPI';

const newsApiService = new NewsApiService();

export class ImageGallery extends Component {
  state = {
    dataQuery: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      newsApiService.query = this.props.searchQuery;
      newsApiService.resetPageToDefault();
      this.setState({ loading: true });

      try {
        const data = await newsApiService.fetchSearch();
        if (parseInt(data.totalHits) <= 0) {
          throw new Error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState({
          dataQuery: data.hits,
          loading: false,
        });
        console.log('data', data.hits);
        console.log('data.totalHits', data.totalHits);
        toast(`Hooray! We found ${data.totalHits} images.`);
        // if (data.totalHits > perPage) showEl(btnLoadMoreEl);
      } catch (error) {
        toast.error(`${error}`);
        console.log(error);
        this.setState({
          dataQuery: null,
          loading: false,
        });
      }
    }
  }

  render() {
    const { loading, dataQuery } = this.state;
    return (
      <>
        {loading && <Loader />}
        <ul className={css.imageGallery}>
          {dataQuery && <p>{dataQuery[0].tags}</p>}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default ImageGallery;
