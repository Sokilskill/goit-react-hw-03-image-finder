import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import 'react-toastify/dist/ReactToastify.min.css';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handlerFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handlerFormSubmit} />
        <Loader />
        <ImageGallery searchQuery={searchQuery} />
        <Button />
        <ToastContainer />
      </>
    );
  }
}
