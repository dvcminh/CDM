import React, { useState } from "react"
import '../Login/login-register.css'
import { Link } from "react-router-dom"
import Validation from "./RegisterValidation"
import { cdmApi } from "../../misc/cdmApi"
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const values = {name, email, password};
        setErrors(Validation(values));
        try {
            const user = { name, email, phone, address, password, role: "CUSTOMER"};
            cdmApi.signup(user)
            .then(response => {
                alert("Register successfully!");
                navigate('/login')
            })
            .catch(error => {
                alert("Register failed!");
                console.log(error);
            })
        }
        catch(error) {
            console.log(error);
        }
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
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="name" id="name" placeholder="Choose Your Username" className="input"/>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setName(e.target.value)} type="email" placeholder="Your Email Address" id="email" name="email" className="input" />
                        <label htmlFor="phone">Phone number</label>
                        <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Your Phone Number" id="phone" name="phone" className="input" />
                        <label htmlFor="email">Address</label>
                        <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Your Home Address" id="address" name="address" className="input" />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" className="input" />  
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
