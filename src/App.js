import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';
import {SearchResultsContainer} from './components/SearchResults/SearchResultsContainer';


function App({trackList}) {
  return (
    <div className="App">
      <header className="App-header">
      <SearchBarContainer />
      <SearchResultsContainer
        trackList = {trackList} 
      />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
