import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';

function SearchResults({trackList, handleClickAddButton}) {
    return (
        <div className='results'>
            <h2>Results</h2>
            <TracklistContainer  trackList = {trackList} handleClickButton={handleClickAddButton} buttonText="Add" />
        </div>
    );
}

export {SearchResults};