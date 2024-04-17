import styles from './App.module.css';
import React from 'react';
import { SearchBarContainer } from '../SearchBar/SearchBarContainer';
import { SearchResultsContainer } from '../SearchResults/SearchResultsContainer';
import { PlaylistContainer } from '../Playlist/PlaylistContainer';
import Header from '../Header/Header';
import '../customFonts.css';

function App({ trackListForResults, trackListForPlaylist, playlistName, handleClickAddButton, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton, handleClickSearchButton, handleChangeSearchInput, searchTerm }) {
  return (
    <div className={styles.app}>
      <Header />
      <SearchBarContainer
        handleClickSearchButton={handleClickSearchButton}
        handleChangeSearchInput={handleChangeSearchInput}
        searchTerm={searchTerm}
      />
      <main>
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
      </main>
    </div>
  );
}

export default App;
