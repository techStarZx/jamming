import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';

function Playlist({ playlistName, trackList, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton }) {
    return (
        <div className='playlistContainer'>
            <input
                type='text'
                placeholder='enter playlist name'
                value={playlistName}
                onChange={handleChangePlaylistNameInput}
                onKeyDown={event => {
                    if(event.key == 'Enter') {
                        handleClickSavePlaylistButton(event);
                    }
                }}
            />
            <TracklistContainer  trackList = {trackList} buttonText="Remove" handleClickButton={handleClickRemoveButton} />
            <button onClick={handleClickSavePlaylistButton}>Save To Spotify</button>
        </div>
    );
}

export {Playlist};