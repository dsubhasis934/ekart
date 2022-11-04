import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
function Login() {
    const [userData, setUserData] = useState({ //using object
        email: "",
        password: ""
    })
    let name, value;
    const updateData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value }) //wrap into the curly breces because its a object.
    }
    const auth = getAuth(app);
    const login = async (event) => {
        event.preventDefault();
        let { email, password } = userData;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Welcome");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode);
            });
    }

    return (
        <>
            <div className="container-contact-form">
                <p className="fw-bold fs-4 text-decoration-underline">Login</p>
                <div className="contact-container">
                    <form action="" method="post" className="body-contact-form">
                        <label htmlFor="name">Email</label>
                        <input type="email" name="email" id="" placeholder='enter your Email here' value={userData.email} onChange={updateData} required />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder="enter your password here" value={userData.password} onChange={updateData} required />
                        <button className='contact-btn btn btn-outline-dark fw-bold' type="submit" onClick={login}>Login</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Login
