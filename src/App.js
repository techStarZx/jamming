import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';
import { SearchResultsContainer } from './components/SearchResults/SearchResultsContainer';
import { PlaylistContainer } from './components/Playlist/PlaylistContainer';


function App({ trackListForResults, trackListForPlaylist, playlistName }) {
  return (
    <div className="App">
      <SearchBarContainer />
      <SearchResultsContainer
        trackList={trackListForResults}
      />
      <PlaylistContainer
        trackList={trackListForPlaylist}
        playlistName={playlistName}
     />
    </div>
  );
}

export default App;
