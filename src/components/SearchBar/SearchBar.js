import React, { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar(props) {

    return (
        <input type='text'
               className={styles.searchInput}
               value={props.searchTerm} 
               placeholder='Enter a song title'
               onChange={props.handleChange}
               onKeyDown={event => {
                if(event.key == 'Enter') {
                    props.handleClick(event);
                }
               }} />
    );
}

export {SearchBar};