import React from "react";
import { Track } from "./Track";

function TrackContainer({track}) {
    return <Track name={track.name} artist={track.artist} album={track.album} id={track.id} />;
}

export {TrackContainer};