import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Loader from '../Loader/Loader';
import NewsApiService from 'api/pixabayAPI';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import css from './ImageGallery.module.css';

const newsApiService = new NewsApiService();
const perPage = newsApiService.perPage;
let score = perPage;

export class ImageGallery extends Component {
  state = {
    dataQuery: null,
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

  async fetchLoadMore() {
    newsApiService.incrementPage();
    const data = await newsApiService.fetchSearch();
    try {
      // createRenderMarkup(data.hits);
      score += data.hits.length;
      console.log('score', score);

      // console.log(  'data.hits: ',
      //   data.hits.length, 'page: ', newsApiService.page,
      //   'total: ',  score
      // );
      // smoothPageScrolling();
      if (score >= data.totalHits) {
        // Notify.info("We're sorry, but you've reached the end of search results.");
        return;
      }
    } catch (error) {
      // Notify.failure(`${error}`);
      console.log(error);
    }
  }

  render() {
    const { dataQuery, status } = this.state;
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'resolve') {
      return (
        <>
          <ul className={css.imageGallery}>
            {dataQuery.map(data => (
              <ImageGalleryItem key={data.id} imagePreview={data} />
            ))}
          </ul>
          <Button fetchLoadMore={this.fetchLoadMore} />
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default ImageGallery;
