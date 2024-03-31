import React from "react";
import { SearchResults } from "./SearchResults";

function SearchResultsContainer({trackList}) {
    return <SearchResults trackList = {trackList} />;
}

export {SearchResultsContainer};