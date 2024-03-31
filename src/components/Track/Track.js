import React from "react";

function Track({name, artist, album, id}) {
    // ok console.log(name);
    // ok console.log(artist);
    // ok console.log(album);
    // ok console.log(id);
    // ok console.log('....s');
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