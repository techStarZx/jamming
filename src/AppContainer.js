import React, { useState, useEffect } from 'react';
import App from './App';

const dummyTrackList = [
  {
    name: 'a1',
    artist: 'a2',
    album: 'a3',
    id: 0
  },
  {
    name: 'b1',
    artist: 'b2',
    album: 'b3',
    id: 1
  },
  {
    name: 'c1',
    artist: 'c2',
    album: 'c3',
    id: 2
  },
  {
    name: 'd1',
    artist: 'd2',
    album: 'd3',
    id: 3
  },
  {
    name: 'e1',
    artist: 'e2',
    album: 'e3',
    id: 4
  }
];

function AppContainer() {
  const [trackListForResults, setTrackListForResults] = useState(dummyTrackList);
  const [playlistName, setPlayListName] = useState('');
  const [trackListForPlaylist, setTrackListForPlaylist] = useState([]);
  
  function handleClickAddButton(e) {
    setTrackListForPlaylist(prev => [...prev, trackListForResults[e.target.id]] );
  }

  function handleClickRemoveButton(e) {
    setTrackListForPlaylist(prev => prev.filter((element, index) => index != e.target.id));
    }

  function handleChangePlaylistNameInput(e) {
    setPlayListName(e.target.value);
  }

  function handleClickSavePlaylistButton(e) {
    alert(`You enter playlist name: ${playlistName}`);
  }

  return (
    <App
      trackListForResults={trackListForResults}
      trackListForPlaylist={trackListForPlaylist}
      playlistName={playlistName}
      handleClickAddButton={handleClickAddButton}
      handleClickRemoveButton={handleClickRemoveButton}
      handleChangePlaylistNameInput={handleChangePlaylistNameInput}
      handleClickSavePlaylistButton={handleClickSavePlaylistButton}
    />
  )
}

export default AppContainer;
