import { useState } from "react";
import SideBar from "../../../layouts/components/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowLeftRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BookAppointment() {

    const [userData, setUserData] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || ""
      );
 

    return ( 
        <>
            <div className="flex">
                    <a href="/customerhome"><FontAwesomeIcon icon={faArrowLeft} className="text-2xl ml-2 mt-2 xl:m-8 p-4 hover:bg-gray-200 rounded-full" /></a>
                    <div className="flex items-center justify-center p-12 mx-auto">
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form>
                        <div className="mb-5">
                        <label htmlFor="name" className="mt-8 mb-3 block text-base font-medium text-[#07074D]">
                            Full Name
                        </label>
                        <input type="text" name="name" id="name" value={userData.email} placeholder="Full Name" className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                            Phone Number
                        </label>
                        <input type="text" name="phone" value={userData.phone} id="phone" placeholder="Enter your phone number" className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md" />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="email"  className="mb-3 block text-base font-medium text-[#07074D]">
                            Email Address
                        </label>
                        <input type="email" name="email" value={userData.username} id="email" placeholder="Enter your email" className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md" />
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                Date
                            </label>
                            <input type="date" name="date" id="date" className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md" />
                            </div>
                        </div>
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                Time
                            </label>
                            <input type="time" name="time" id="time" className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md" />
                            </div>
                        </div>
                        </div>
                        <div className="mb-5 pt-3">
                        <div className="mx-auto grid max-w-screen-lg pb-20">
                                <div>
                                <p className=" text-xl font-bold text-black">Select a service</p>

                                    <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3 flex">
                                        <div className="relative flex-1">
                                            <input className="peer hidden" id="radio_1" type="radio" name="radio" defaultChecked />
                                            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-black" />
                                            <label className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-gray-400 peer-checked:text-white" htmlFor="radio_1">
                                                <span className="mt-2 font-medium">Test Drive</span>
                                                <span className="text-xs uppercase">1 Hour</span>
                                            </label>
                                        </div>

                                        <div className="relative flex-1">
                                            <input className="peer hidden" id="radio_2" type="radio" name="radio" />
                                            <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-black" />
                                            <label className="flex h-full w-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-gray-400 peer-checked:text-white" htmlFor="radio_2">
                                                <span className="mt-2 font-medium">Consulting and Buying</span>
                                                <span className="text-xs uppercase">1 Hour</span>
                                            </label>
                                        </div>
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <button className="hover:bg-gray-700 w-full rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Book Appointment
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
     );
}

export default BookAppointment;