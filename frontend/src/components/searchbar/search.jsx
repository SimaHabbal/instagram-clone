import React, { useState } from "react";
import styles from './search.module.css';
import { Card } from "../shared/user card/userCard";

export const Searchbar = ({isPressed}) =>{
    const [search, setSearch] = useState('');
    const buttonText = "follow";

    const hideSearchModel =() =>{
        isPressed(prev => !prev);
    }

    return(
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div className={styles.title}>
                    <div>Search </div>
                    <img src="/x.png" alt="close image" onClick={hideSearchModel}/>
                </div>
                <input type="text" placeholder="Search" value={search} onChange={ e=> setSearch(e.target.value)}/>
            </div>
            <div className={styles.body}>
                <Card button_title={buttonText}/>
            </div>
        </div>
    )
}