import React from "react";

function Track({name, artist, album, id, handleClickButton, buttonText, indexOfTrack}) {
    return (
        <div 
            className='trackContainer'
            key={`track${id}`}
        >
            <p key='name'>{name}</p>
            <p key='artist'>{artist}</p>
            <p key='album'>{album}</p>
            <button 
              id={indexOfTrack} 
              onClick={handleClickButton}>
              {buttonText}
            </button>
        </div>
        );
}

export {Track};