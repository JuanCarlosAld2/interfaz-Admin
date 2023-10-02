import React, { useState } from "react";
import { validateEmail } from "./validations";
import { validatepassword } from "./validations";

export default function Login ({login}) {

    const errorStyle = {
        color: "rgba(255, 0, 0, 0.8)",
    
      };

    const [userData, setUserData] =useState({
        email:"",
        password:"",
    })

    const[errors,setErrors]=useState({  
        email:"",
        password:""
    })

    const handleEmail = (e) =>{
        const property = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,[property]:value
        })
        validateEmail({...userData,[property]:value}, setErrors,errors)
    }

    const handlePass = (e) =>{
        const property = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,[property]:value
        })
        validatepassword({...userData,[property]:value}, setErrors,errors)
    }
    const handleSubmit = (e)=>{ // manda info
        e.preventDefault()
        login(userData)
    }

    return(
        <form  onSubmit={handleSubmit}>
            <h1 >WELCOME ADMIN</h1>

            <div>
                <input
                    type = "text"
                    placeholder="Email"
                    name="email"
                    value={userData.email}
                    onChange={handleEmail}
                />
                <span style={errorStyle}>{errors.email}</span>
            
                <input 
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={userData.password}
                    onChange={handlePass}
                />
                <span style={errorStyle}>{errors.password}</span>
            
            
                {
                    errors.email || errors.password ?null:<button type="submit">Acceder</button>
                }
            
            </div>
            
                
            
            
        </form>
    )
}