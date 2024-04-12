import React, { useState } from "react";
import styles from './signup.module.css';
import Footer from "../../components/shared/footer/footer";



const Signup = () =>{
    const [validator, setValidator] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user_name, setUsername] = useState('');

    const login = () =>{
    window.location.href = '/';
}
    const register = async () =>{
        const body = {
            name: name,
            user_name: user_name,
            email: validator,
            password: password
        }
        const parsebody = JSON.stringify(body);
        try{
            const response = await fetch ("http://localhost:8000/api/register",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: parsebody
            });
            const data = await response.json();
            if (data.status === "success"){
                console.log("registered in");
                const token = data.authorisation.token;

                localStorage.setItem('token', token);
                window.location.href = "/home";

            }else{
                console.log("failed to register")
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
                            <div className={styles.message}>Sign up to see photos and videos from your friends.</div>
                            <button className={styles.btn}>
                                <img src="/facebook_logo_white.png" alt="facebook_logo" />
                                <div>Log in with Facebook</div>
                            </button>
                            <div className={styles.seperator}>
                                <div className={styles.line}></div>
                                <div>OR</div>
                                <div className={styles.line}></div>
                            </div>
                        </div>
                        <div className={styles.input_container}>
                            <input type="text" placeholder="Email" value={validator} onChange={ e=> setValidator(e.target.value) }/>
                            <input type="text" placeholder="Full Name" value={name} onChange={ e=> setName(e.target.value) }/>
                            <input type="text" placeholder="Username" value={user_name} onChange={ e=> setUsername(e.target.value) }/>
                            <input type="password" placeholder="Password" value={password} onChange={ e=> setPassword(e.target.value) }/>

                            <div className={styles.detailes}>
                                <div>People who use our service may have uploaded <br/> your contact information to Instagram. Learn<br/> More</div>
                                <div>By signing up, you agree to our Terms , Privacy<br/> Policy and Cookies Policy .</div>
                            </div>
                            <button className={styles.btn} onClick={register}>Sign up</button>
                        </div>
                    </div>
                    <div className={styles.bottom_container}>Already have an account? <span onClick={login}>Log in</span></div>
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

export default Signup;