import React, { useState } from "react"
import './login-register.css'
import { Link, useNavigate } from "react-router-dom" 
import Validation from "./LoginValidation"
import axios from "axios"
import { stringify } from "postcss"
import { useEffect } from "react"

function Login() {
    const [errors, setErrors] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usenavigate = useNavigate("");
    const [data, setData] = useState([]);

    const url = "http://localhost:8081/api/v1/user/login/" + email;
  
    async function  loginFunc()
    {  
        const result = await axios.get("http://localhost:8081/api/v1/user/login/" + email + "&" + password);
        console.log(JSON.stringify(result.data, null, 2));

        if(JSON.stringify(result.data) === ""){}
        else{usenavigate("/customerhome");}
    }

    return (
        <div className="bg-gradient-to-b from-white to-gray-300 flex justify-center">
            <div className="container">
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-center items-center">
                <div className="auth-form-container">
                    <label htmlFor="form" className="heading1">Login</label>
                        <label htmlFor="email"  className="label">Email</label>
                        <input type="email" placeholder="Your Email Address..." name="email" className="input" onChange={(event) => setEmail(event.target.value)} value={email}/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <label htmlFor="password" className="label">Password</label>
                        <input  type="password" placeholder="Password..." name="password" className="input" onChange={(event) => setPassword(event.target.value)} value={password}/>  
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <button type="submit" className="login-button bg-black" onClick={loginFunc}>Sign in</button>
                        <div className="flex justify-center items-center">
                            <div className="line-horizontal mr-4 mt-2"></div>
                            <p>Or</p>
                            <div className="line-horizontal ml-4 mt-2"></div>
                        </div>
                        <div className="flex justify-center items-center">
                                <img src="src\assets\images\github-logo.png" alt="" className="logo mr-4"/>
                                <img src="src\assets\images\google.png" alt="" className="logo ml-4" />
                        </div>
                    <Link to='/register' className="link-btn">Don't have an account? Register here.</Link>
                </div>
            </div>
            
            <div className="flex-1"></div>
        </div>
        </div>
       
    )
}

export default Login;