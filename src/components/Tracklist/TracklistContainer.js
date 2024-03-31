import React, {useState} from "react";
import { Tracklist } from "./Tracklist";
import {TrackContainer} from '../Track/TrackContainer';

function TracklistContainer({trackList}) {
    let tracks = trackList.map((track) => {
        return <TrackContainer track={track} />
    });
    return <Tracklist tracks={tracks} />;
}

export {TracklistContainer};