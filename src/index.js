import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
const API_KEY = 'AIzaSyBuRvtSp4OR02N0jijM6CpHVCEqQiHxrPY';

YTSearch(
  {key:API_KEY, term: 'surfboards'},
  function(data) {
    console.log(data);
  }
);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }

    YTSearch({key:API_KEY, term: 'surfboards'}, (videos) => {
      console.log(videos);
      this.setState({videos}); //{videos:videos} reduced to {videos}
      });
  }
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

//Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
