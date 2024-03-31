import React from "react";

function Track({name, artist, album, id}) {
    return (
        <div 
            className='trackContainer'
            key={`track${id}`}
        >
            <p key='name'>{name}</p>
            <p key='artist'>{artist}</p>
            <p key='album'>{album}</p>
        </div>
        );
}

export {Track};