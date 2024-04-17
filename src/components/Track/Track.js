import React from "react";
import styles from './Track.module.css';

function Track({ name, artist, album, id, handleClickButton, buttonText, indexOfTrack }) {
    return (
        <div
            className={styles.track}
            key={`track${id}`}
        >
            <div className="trackInfo">
                <h3>{name}</h3>
                <p>{artist} | {album}</p>
            </div>
            <button
                id={indexOfTrack}
                onClick={handleClickButton}>
                {buttonText}
            </button>
        </div>
    );
}

export { Track };