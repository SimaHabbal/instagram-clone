import React from "react";
import styles from './userCard.module.css';

export const Card = ({button_title}) =>{
    return (
        <div className={styles.container_header}>
            <div className={styles.header_image}>
                <img src="/Account.png" alt="user image" />
            </div>
            <div className={styles.text_container}>
                <div className={styles.user_name}>Majed Habli</div>
                <div>Following</div>
            </div>
            <div className={styles.button_container}>{button_title}</div>
        </div>
    )
}