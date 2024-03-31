import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';

function Playlist({ playlistName, trackList }) {
    return (
        <div className='playlistContainer'>
            <h2>this is playlist</h2>
            <input
                type='text'
                placeholder='enter playlist name'
                value={playlistName}
            />
            <TracklistContainer  trackList = {trackList} />
            <button>Save To Spotify</button>
        </div>
    );
}

export {Playlist};