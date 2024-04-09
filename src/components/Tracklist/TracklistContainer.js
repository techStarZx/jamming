import React, {useState} from "react";
import { Tracklist } from "./Tracklist";
import {TrackContainer} from '../Track/TrackContainer';

function TracklistContainer({trackList, handleClickButton, buttonText}) {
    let tracks = trackList.map((track, index) => {
        return <TrackContainer track={track} handleClickButton={handleClickButton} buttonText={buttonText} indexOfTrack={index} />
    });
    return <Tracklist tracks={tracks} />;
}

export {TracklistContainer};