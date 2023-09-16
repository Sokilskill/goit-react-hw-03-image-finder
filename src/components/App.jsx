import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

const API_KEY = '38642451-6ca93df2512694306dc1a1cd7';

const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {};

  render() {
    return <SearchBar />;
  }
}
