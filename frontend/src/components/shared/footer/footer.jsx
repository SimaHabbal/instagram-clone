import React from "react";
import styles from './footer.module.css';

const Footer = () =>{
    <div className={styles.footer_container}>
        <div className={styles.line_one}>
            <a href="https://about.meta.com/">Meta</a>
            <a href="https://about.meta.com/">About</a>
            <a href="https://about.meta.com/">Blog</a>
            <a href="https://about.meta.com/">Jobs</a>
            <a href="https://about.meta.com/">Help</a>
            <a href="https://about.meta.com/">Api</a>
            <a href="https://about.meta.com/">Privacy</a>
            <a href="https://about.meta.com/">Terms</a>
            <a href="https://about.meta.com/">Top Accounts</a>
            <a href="https://about.meta.com/">Locations</a>
            <a href="https://about.meta.com/">Instagram Lite</a>
            <a href="https://about.meta.com/">Threads</a>
            <a href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading & Non-Users</a>
            <a href="https://about.meta.com/">Meta Verified</a>
        </div>
        <div className={styles.line_two}>
            <div>English</div>
            <div>© 2023 Instagram from Meta</div>
        </div>
    </div>
}

export default Footer;