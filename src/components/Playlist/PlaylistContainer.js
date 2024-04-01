import React from "react";
import { Playlist } from "./Playlist";

function PlaylistContainer({ playlistName, trackList, handleClickRemoveButton }) {
    return <Playlist
    trackList={trackList}
    playlistName={playlistName}
    handleClickRemoveButton={handleClickRemoveButton}
 />
}

export { PlaylistContainer };