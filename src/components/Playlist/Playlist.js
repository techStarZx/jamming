import React from 'react';

function Playlist() {
    return (
        <div className='playlistContainer'>
            <input
                type='text'
                placeholder='enter playlist name'
            />
            <div>Tracklist goes here</div>
            <button>Save To Spotify</button>
        </div>
    );
}

export {Playlist};