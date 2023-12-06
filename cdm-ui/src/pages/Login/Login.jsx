import React, { useState } from "react"
import './login-register.css'
import { Link } from "react-router-dom" 
import Validation from "./LoginValidation"

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className="bg-gradient-to-b from-white to-gray-300 flex justify-center">
            <div className="container">
            <div className="flex-1"></div>
            <div className="flex flex-1 justify-center items-center">
                <div className="auth-form-container">
                    <form action='' className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="form" className="heading1">Login</label>
                        <label htmlFor="email"  className="label">Email</label>
                        <input onChange={handleInput} type="email" placeholder="Your Email Address" name="email" className="input"/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <label htmlFor="password" className="label">Password</label>
                        <input onChange={handleInput} type="password" placeholder="Password" name="password" className="input"/>  
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <button type="submit" className="login-button bg-black">Sign in</button>
                        <div className="flex justify-center items-center">
                            <div className="line-horizontal mr-4 mt-2"></div>
                            <p>Or</p>
                            <div className="line-horizontal ml-4 mt-2"></div>
                        </div>
                        <div className="flex justify-center items-center">
                                <img src="src\assets\images\github-logo.png" alt="" className="logo mr-4"/>
                                <img src="src\assets\images\google.png" alt="" className="logo ml-4" />
                        </div>
                    </form>
                    <Link to='/register' className="link-btn">Don't have an account? Register here.</Link>
                </div>
            </div>
            
            <div className="flex-1"></div>
        </div>
        </div>
       
    )
}

export default Login;