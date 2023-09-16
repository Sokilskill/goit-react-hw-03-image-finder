import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handlerFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handlerInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
    console.log('e', e.currentTarget.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerFormSubmit}>
          <button type="submit" className={css['searchForm-button']}>
            <span className={css['searchForm-button-label']}>Search</span>
          </button>

          <input
            onChange={this.handlerInputChange}
            className={css['searchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {};
