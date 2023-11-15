import React, { useState } from "react"
import logo from "../../assets/images/logo192.png"
import '../../css/login-register.css'
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
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="group-heading">
                <div className="heading1">CDM</div>
                <img src={logo} className="logo" alt="" />
                </div>
                <label htmlFor="form" className="heading2">Register account</label>
                <label htmlFor="name">Username</label>
                <input onChange={handleInput} type="text" name="name" id="name" placeholder="Choose a username" />
                {errors.name && <span className="text-danger">{errors.name}</span>}
                <label htmlFor="email">Email</label>
                <input onChange={handleInput} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                {errors.email && <span className="text-danger">{errors.email}</span>}
                <label htmlFor="password">Password</label>
                <input onChange={handleInput} type="password" placeholder="********" id="password" name="password" />  
                {errors.password && <span className="text-danger">{errors.password}</span>}
                <button type="submit">Sign up</button>
            </form>
            <Link to='/login' className="link-btn">Already have an account? Login here.</Link>
            
        </div>
    )
}

export default Register;
