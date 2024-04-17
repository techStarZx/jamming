import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchButton } from './SearchButton';
import styles from './SearchBarContainer.module.css';

function SearchBarContainer({handleClickSearchButton, handleChangeSearchInput, searchTerm}) {


    return (
        <div className={styles.searchBarContainer}>
            <SearchBar 
                searchTerm={searchTerm} 
                handleChange={handleChangeSearchInput}
                handleClick={handleClickSearchButton} />
            <br />
            <SearchButton 
                handleClick={handleClickSearchButton} />
        </div>
    );
}

export {SearchBarContainer};