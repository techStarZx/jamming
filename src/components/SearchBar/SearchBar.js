import React, { useState } from 'react';

function SearchBar(props) {

    return (
        <input type='text'
               value={props.searchTerm} 
               onChange={props.handleChange} />
    );
}

export {SearchBar};