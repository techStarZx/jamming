import React from "react";
import styles from './SearchButton.module.css'

function SearchButton(props) {
    return <button onClick={props.handleClick} className={styles.searchButton}>SEARCH</button>
}

export {SearchButton};