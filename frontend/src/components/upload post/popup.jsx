import React from "react";
import styles from  './popup.module.css';

export const Popup = ({isPressed}) =>{

    const hideModel =() =>{
        isPressed(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.close_button}>
                <img src="/x.png" alt="close image" onClick={hideModel}/>
            </div>
            <div className={styles.popup_container}>
                <div className={styles.popup_header}>
                    Create new post
                </div>
                <div className={styles.popup_body}>
                    <img src="/upload_bg.png" alt="" />
                    <div>Dragg photos and videos here</div>
                    <div className={styles.btn}>
                        <div className={styles.btn_container}>
                            <input type="file" name="upload_file[]" id="upload_file" multiple="multiple" class="form-control" hidden/>
                            <label className={styles.upload_label} for="upload_file">Select from computer</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}