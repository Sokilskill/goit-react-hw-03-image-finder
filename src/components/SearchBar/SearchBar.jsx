import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import css from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handlerFormSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      toast.error('Введіть щось для пошуку');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handlerInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerFormSubmit}>
          <button
            type="submit"
            className={css['searchForm-button']}
            aria-label=" Search"
          >
            <ImSearch className={css['searchForm-button-icon']}></ImSearch>
          </button>

          <input
            onChange={this.handlerInputChange}
            className={css['searchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
