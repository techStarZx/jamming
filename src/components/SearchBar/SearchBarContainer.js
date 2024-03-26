import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchButton } from './SearchButton';

function SearchBarContainer() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        alert('search button clicked');
    }

    return (
        <div className='searchBarContainer'>
            <SearchBar 
                searchTerm={searchTerm} 
                handleChange={handleChange} />
            <br />
            <SearchButton 
                handleClick={handleClick} />
        </div>
    );
}

export {SearchBarContainer};