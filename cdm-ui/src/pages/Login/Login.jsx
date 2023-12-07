import React, { useState } from "react"
import './login-register.css'
import { Link } from "react-router-dom" 
import Validation from "./LoginValidation"
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';


function Login() {
    const clientId ="671243941248-6t9bi1aq2om20nlksbvq9amc8snso34a.apps.googleusercontent.com";

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    const responseGoogleSuccess = (response) => {
        console.log("haha", response);
        navigate('/customerhome');
    };

    const responseGoogleError = (response) => {
        console.log("huhu", response);
        // navigate('/customerhome');
    };

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
                        <div className="flex flex-col justify-center items-center">
                                <GoogleLogin
                                clientId={clientId}
                                buttonText="Login by google account"
                                onSuccess={responseGoogleSuccess}
                                onFailure={responseGoogleError}
                                cookiePolicy={'single_host_origin'}
                                />
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