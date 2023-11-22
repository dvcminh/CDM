import React, { useState } from "react"
import logo from "../../assets/images/logo192.png"
import '../../css/login-register.css'
import '../Login/login-register.css'
import { Link } from "react-router-dom"
import Validation from "./RegisterValidation"

function Register() {
    const [values, setValues] = useState({
        name: '',
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
        <div className="bg-gradient-to-b from-white to-gray-400 flex justify-center">
        <div className="container">
            <div style={{flex: 1}}></div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <div className="auth-form-container">
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="form" className="heading1">Register account</label>
                        <label htmlFor="name">Username</label>
                        <input onChange={handleInput} type="text" name="name" id="name" placeholder="Choose Your Username" className="input"/>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                        <label htmlFor="email">Email</label>
                        <input onChange={handleInput} type="email" placeholder="Your Email Address" id="email" name="email" className="input" />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <label htmlFor="password">Password</label>
                        <input onChange={handleInput} type="password" placeholder="Password" id="password" name="password" className="input" />  
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                        <button type="submit" className="login-button bg-black">Sign up</button>
                    </form>
                    <Link to='/login' className="link-btn">Already have an account? Login here.</Link>
                </div>
            </div>
            <div style={{flex: 1}}></div>
        </div>
        </div>
    )
}

export default Register;
