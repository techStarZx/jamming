import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';
import styles from './Playlist.module.css';

function Playlist({ playlistName, trackList, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton }) {
    return (
        <div className={styles.playlist}>
            <input
                type='text'
                placeholder='Enter New Playlist Name'
                value={playlistName}
                onChange={handleChangePlaylistNameInput}
                onKeyDown={event => {
                    if(event.key == 'Enter') {
                        handleClickSavePlaylistButton(event);
                    }
                }}
            />
            <TracklistContainer  trackList = {trackList} buttonText="-" handleClickButton={handleClickRemoveButton} />
            <button onClick={handleClickSavePlaylistButton} className={styles.saveBtn}>Save To Spotify</button>
        </div>
    );
}

export {Playlist};