import React, {useState} from 'react';
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
    id: 3
  },
  {
    name: 'd1',
    artist: 'd2',
    album: 'd3',
    id: 4
  },
  {
    name: 'e1',
    artist: 'e2',
    album: 'e3',
    id: 5
  }
];

function AppContainer() {
  const [trackList, setTrackList] = useState(dummyTrackList);

  return (
    <App
      trackList = {trackList} 
    />
  );
}

export default AppContainer;
