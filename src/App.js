import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SearchBarContainer } from './components/SearchBar/SearchBarContainer';
import { SearchResultsContainer } from './components/SearchResults/SearchResultsContainer';
import { PlaylistContainer } from './components/Playlist/PlaylistContainer';


function App({ trackListForResults, trackListForPlaylist, playlistName, handleClickAddButton, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton }) {
  return (
    <div className="App">
      <SearchBarContainer />
      <SearchResultsContainer
        trackList={trackListForResults}
        handleClickAddButton={handleClickAddButton}
      />
      <PlaylistContainer
        trackList={trackListForPlaylist}
        playlistName={playlistName}
        handleClickRemoveButton={handleClickRemoveButton}
        handleChangePlaylistNameInput={handleChangePlaylistNameInput}
        handleClickSavePlaylistButton={handleClickSavePlaylistButton}
     />
    </div>
  );
}

export default App;
