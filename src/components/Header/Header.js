import React from "react";
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
        </header>
    );
}

export default Header;