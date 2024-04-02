import React, { useState } from 'react';

function SearchBar(props) {

    return (
        <input type='text'
               value={props.searchTerm} 
               onChange={props.handleChange}
               onKeyDown={event => {
                if(event.key == 'Enter') {
                    props.handleClick(event);
                }
               }} />
    );
}

export {SearchBar};