import React, { useState } from "react";
import styles from './signin.module.css';
import Footer from "../../components/shared/footer/footer";

const Signin = () =>{
    const [validator, setValidator] = useState('');
    const [password, setPassword] = useState('');

    const register = () =>{
        window.location.href = '/signup';
    }

    const login = async () =>{
        const body = {
            email: validator,
            password: password
        }
        const parsebody = JSON.stringify(body);
        try{
            const response = await fetch ("http://localhost:8000/api/login",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: parsebody
            });
            const data = await response.json();
            if (data.status === "success"){
                console.log("logged in");
                const token = data.authorisation.token;

                localStorage.setItem('token', token);
                window.location.href = "/home";

            }else{
                console.log("failed to login")
            }
        }
        catch(error){
            console.log('There was an error', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_body}>
            
                <div className={styles.body_right}>
                    <div className={styles.top_container}>
                        <div className={styles.logo_container}>
                            <img src="/logo.png" alt="logo" />
                        </div>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="Email" value={validator} onChange={ e=> setValidator(e.target.value) }/>
                            <input type="password" placeholder="Password" value={password} onChange={ e=> setPassword(e.target.value) }/>
                            <button onClick={login}>Log in</button>
                        </div>
                        <div className={styles.seperator}>
                            <div className={styles.line}></div>
                            <div>or</div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.interactables}>
                            <div className={styles.facebook}>
                                <img src="/fb_logo.png" alt="facebook_logo" />
                                <div>Log in with Facebook</div>
                            </div>
                            <div className={styles.forget_password}>Forgot password</div>
                        </div>
                    </div>
                    <div className={styles.bottom_container}>Don't have an account? <span onClick={register}>Sign up</span></div>
                    <div className={styles.cta}>
                        <div>Get the app</div>
                        <div className={styles.cta_images}>
                            <img className={styles.cta1} src="/get_on_playstore.png" alt="get_on_playstore" />
                            <img className={styles.cta2} src="/get_on_microsoft.png" alt="get_on_microsoft" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <Footer/>
            </div>
        </div>
    )
}

export default Signin;