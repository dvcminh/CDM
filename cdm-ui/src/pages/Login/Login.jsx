import React, { useState } from "react"
import logo from "../../assets/images/logo192.png"
import '../../css/login-register.css'
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
        <div className="auth-form-container">
            <form action='' className="login-form" onSubmit={handleSubmit}>
                <div className="group-heading">
                <div className="heading1">CDM</div>
                <img src={logo} className="logo" alt="" />
                </div>
                <label htmlFor="form" className="heading2">Login</label>
                <label htmlFor="email">Email</label>
                <input onChange={handleInput} type="email" placeholder="youremail@gmail.com" name="email" />
                {errors.email && <span className="text-danger">{errors.email}</span>}
                <label htmlFor="password">Password</label>
                <input onChange={handleInput} type="password" placeholder="********" name="password" />  
                {errors.password && <span className="text-danger">{errors.password}</span>}
                <button type="submit">Sign in</button>
            </form>
            <Link to='/register' className="link-btn">Don't have an account? Register here.</Link>
        
        </div>
       
    )
}

export default Login;