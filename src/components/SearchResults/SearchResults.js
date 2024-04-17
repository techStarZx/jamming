import React from 'react';
import {TracklistContainer} from '../Tracklist/TracklistContainer';
import styles from './SearchResults.module.css';

function SearchResults({trackList, handleClickAddButton}) {
    return (
        <div className={styles.searchResult}>
            <h2 className={styles.h2}>Results</h2>
            <TracklistContainer  trackList = {trackList} handleClickButton={handleClickAddButton} buttonText="+" />
        </div>
    );
}

export {SearchResults};