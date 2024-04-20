import React, { useState, useEffect } from 'react';
import App from './App';
import Spotify from '../../util/Spotify';

// const dummyTrackList = [
//   {
//     name: 'a1',
//     artist: 'a2',
//     album: 'a3',
//     id: 0,
//     uri: 'https://open.spotify.com/track/2h4MTQZP8quVwuwrtIPErD'
//   },
//   {
//     name: 'b1',
//     artist: 'b2',
//     album: 'b3',
//     id: 1,
//     uri: 'https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld'
//   },
//   {
//     name: 'c1',
//     artist: 'c2',
//     album: 'c3',
//     id: 2,
//     uri: 'https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld'
//   },
//   {
//     name: 'd1',
//     artist: 'd2',
//     album: 'd3',
//     id: 3,
//     uri: 'https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld'
//   },
//   {
//     name: 'e1',
//     artist: 'e2',
//     album: 'e3',
//     id: 4,
//     uri: 'https://open.spotify.com/track/1Yk0cQdMLx5RzzFTYwmuld'
//   }
// ];

function AppContainer() {
  const [playlistName, setPlayListName] = useState('');
  const [trackListForResults, setTrackListForResults] = useState([]);
  const [trackListForPlaylist, setTrackListForPlaylist] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleClickAddButton(e) {
    if(!trackListForPlaylist.includes(trackListForResults[e.target.id])) {  // checking if track is already in the playlist
      setTrackListForPlaylist(prev => [...prev, trackListForResults[e.target.id]]);
    }
  }

  function handleClickRemoveButton(e) {
    setTrackListForPlaylist(prev => prev.filter((element, index) => index != e.target.id));
  }

  function handleChangePlaylistNameInput(e) {
    setPlayListName(e.target.value);
  }

  function handleClickSavePlaylistButton(e) {
    // spotify uses array of uri properties to save the tracks in the playlist
    const uriArr = trackListForPlaylist.map(track => track.uri);
    Spotify.savePlaylist(playlistName, uriArr);
    setPlayListName('');
    setTrackListForPlaylist([]);
  }

  async function handleClickSearchButton() {
    if(!searchTerm) {
      return;
    }
    const tracks = await Spotify.search(searchTerm);
    if(tracks.length > 0) {
      setTrackListForResults(tracks);
    }
  }

  function handleChangeSearchInput(e) {
    setSearchTerm(e.target.value);
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
      handleClickSearchButton={handleClickSearchButton}
      handleChangeSearchInput={handleChangeSearchInput}
      searchTerm={searchTerm}
    />
  )
}

export default AppContainer;
