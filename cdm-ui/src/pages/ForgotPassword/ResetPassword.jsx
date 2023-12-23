import React, { useState } from "react"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Login/login-register.css'
import { Link } from "react-router-dom"
import { cdmApi } from "../../misc/cdmApi"
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || []
  );
  const [user, setUser] = useState({});
  const [id, setId] = useState(userData.id);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [newPassword, setNewPassword] = useState();
  const [confirmNewPassword, setConfirmNewPassword] = useState();
  const [type, setType] = useState("accessories");
  const navigate = useNavigate();
  const getUserMe = async () => {
    let response = await cdmApi.getUserMe(userData.username);
    setUser(response.data);
    setEmail(response.data.email);
  };


  const handleChangePassword = async (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirm new password are not the same");
      return;
    }
    try {
      const user = { id, password, newPassword, confirmNewPassword };
      await cdmApi.changePassword(user);
      alert("Change password successfully");
      navigate('/login');
    } catch (error) {
      alert("Change password failed");
    }
  };

  useEffect(() => {
    getUserMe();
  }, []);

  useEffect(() => {
    setId(userData.id);
    console.log(user);
  }, [user]);


  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-32 w-auto"
            src="https://res.cloudinary.com/droondbdu/image/upload/v1702194603/wepik-gradient-modern-car-detail-clean-amp-repair-logo-20231210074938LRYR_dyz3ez.png"
            alt="Your Company"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Reset Your Password
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="mt-4">
                <div className="mt-2">
                <form onSubmit={handleChangePassword}>
                <label>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            New Password
                    </label>
                    <input className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-white" type="password" onChange={(e) => setNewPassword(e.target.value)} />
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Comfirm Password
                    </label>
                    <input className="px-4 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-white" type="password" onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </label>
                <button className="flex w-full justify-center rounded-md mt-6 bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" type="submit">Reset Password</button>
                </form>
    
                </div>
            </div>
        </div>   
    </div>
    </>
);
}

export default ResetPassword;
