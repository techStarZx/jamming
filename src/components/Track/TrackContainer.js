import React from "react";
import { Track } from "./Track";

function TrackContainer({track, handleClickButton, buttonText, indexOfTrack}) {
    return <Track 
            name={track.name} 
            artist={track.artist} 
            album={track.album} 
            id={track.id} 
            handleClickButton={handleClickButton}
            buttonText={buttonText}
            indexOfTrack={indexOfTrack}
           />;
}

export {TrackContainer};