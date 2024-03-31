import React, {useState} from "react";
import { Tracklist } from "./Tracklist";
import {TrackContainer} from '../Track/TrackContainer';

function TracklistContainer({trackList}) {
    // ok console.log(trackList);
    let tracks = trackList.map((track) => {
        // ok console.log(track);
        return <TrackContainer track={track} />
    });
    // console.log(tracks);
    // alert(tracks);
    return <Tracklist tracks={tracks} />;
}

export {TracklistContainer};