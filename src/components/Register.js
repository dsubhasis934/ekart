import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './Firebase';
function Register() {
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
    //connection with firebase
    const submitData = async (event) => {
        event.preventDefault();
        let { email, password } = userData;
        //here userdata is table name and json is extension,json estnsion is compulory. 
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("successfully register");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                alert(errorCode);
                // ..
            });
    }
    return (
        <>
            <div className="container-contact-form">
                <p className="fw-bold fs-4 text-decoration-underline">Register Here</p>
                <div className="contact-container">
                    <form method="post" className="body-contact-form">

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='enter your email here' value={userData.email} onChange={updateData} required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder="please select a strong password" value={userData.password} onChange={updateData} />
                        <button className='contact-btn btn btn-outline-dark fw-bold' type="submit" onClick={submitData}>Register</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register
