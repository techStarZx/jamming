import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';

function SearchResults({trackList}) {
    return (
        <div className='results'>
            <h2>Results</h2>
            <TracklistContainer  trackList = {trackList} />
        </div>
    );
}

export {SearchResults};