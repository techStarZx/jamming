import React from "react";
import { Playlist } from "./Playlist";

function PlaylistContainer({ playlistName, trackList, handleClickRemoveButton, handleChangePlaylistNameInput, handleClickSavePlaylistButton }) {
    return <Playlist
    trackList={trackList}
    playlistName={playlistName}
    handleClickRemoveButton={handleClickRemoveButton}
    handleChangePlaylistNameInput={handleChangePlaylistNameInput}
    handleClickSavePlaylistButton={handleClickSavePlaylistButton}
 />
}

export { PlaylistContainer };