import React from "react";
import { SearchResults } from "./SearchResults";

function SearchResultsContainer({trackList, handleClickAddButton}) {
    return <SearchResults 
            trackList = {trackList}
            handleClickAddButton={handleClickAddButton} 
            />;
}

export {SearchResultsContainer};