import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {};
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm}>
          <button type="submit" className={css['searchForm-button']}>
            <span className={css['searchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['searchForm-input']}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {};
