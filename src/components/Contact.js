
import React, { useState } from 'react'

function Contact() {
    const [userData, setUserData] = useState({ //using object
        name: "",
        number: "",
        email: ""
    })
    let name, value;
    const updateData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value }) //wrap into the curly breces because its a object.
    }
    const contactform = async (event) => {
        event.preventDefault();
        let { name, email, number } = userData;
        //here userdata is table name and json is extension,json estnsion is compulory. 
        const data = await fetch("https://register-ekart-default-rtdb.firebaseio.com/userdata.json", {
            method: "POST", //when we fetch data from database and send data on the database we need to declare method,headers and body.
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, number
            })
        })
        if (data) {
            alert("Thanks for your response");
        } else {
            alert("please fill the data");
        }
    }
    return (
        <>
            <div className="container-contact-form">
                <p className="fw-bold fs-4 text-decoration-underline">Contact us</p>
                <div className="contact-container">
                    <form action="" method="post" className="body-contact-form">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" value={userData.name} onChange={updateData} placeholder='enter your name here' required />
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" value={userData.email} onChange={updateData} placeholder='enter your email here' required />
                        <label htmlFor="number">Number</label>
                        <input type="text" name="number" id="" value={userData.number} onChange={updateData} placeholder='enter your number here' required />
                        <button className='contact-btn btn btn-outline-dark fw-bold' type="submit" onClick={contactform}>submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contact
