import React from "react";
import styles from './following.module.css';
import { Card } from "../shared/user card/userCard";

export const Following = () =>{
    const buttonText = "Unfollow";
    
    return (
        <div className={styles.container}>
            <div className={styles.container_header}>
                <div className={styles.header_image}>
                    <img src="/Account.png" alt="user image" />
                </div>
                <div className={styles.text_container}>
                    <div className={styles.user_name}>User Name</div>
                    <div>name</div>
                </div>
            </div>
            <div className={styles.message}>
                People you follow
            </div>
            <div className={styles.following_list}>
                <Card button_title={buttonText}/>
            </div>
        </div>
    )
}