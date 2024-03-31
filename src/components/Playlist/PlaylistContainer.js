import React from "react";
import { Playlist } from "./Playlist";

function PlaylistContainer({ playlistName, trackList }) {
    return <Playlist
    trackList={trackList}
    playlistName={playlistName}
 />
}

export { PlaylistContainer };