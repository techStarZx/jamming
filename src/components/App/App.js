import './App.css';
import React from 'react';
import { SearchBarContainer } from '../SearchBar/SearchBarContainer';
import { SearchResultsContainer } from '../SearchResults/SearchResultsContainer';
import { PlaylistContainer } from '../Playlist/PlaylistContainer';


function App({ trackListForResults, trackListForPlaylist, playlistName, handleClickAddButton, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton, handleClickSearchButton, handleChangeSearchInput, searchTerm }) {
  return (
    <div className="App">
      <SearchBarContainer
        handleClickSearchButton={handleClickSearchButton}
        handleChangeSearchInput={handleChangeSearchInput}
        searchTerm={searchTerm}
      />
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
