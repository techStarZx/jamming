import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';

function Playlist({ playlistName, trackList, handleClickRemoveButton }) {
    return (
        <div className='playlistContainer'>
            <input
                type='text'
                placeholder='enter playlist name'
                value={playlistName}
            />
            <TracklistContainer  trackList = {trackList} buttonText="Remove" handleClickButton={handleClickRemoveButton} />
            <button>Save To Spotify</button>
        </div>
    );
}

export {Playlist};