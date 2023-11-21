import SideBar from "../../../layouts/components/SideBar";
import '../../../components/CarCard/CarCard.css'
import './CustomerProfile.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPenToSquare, faPencil } from "@fortawesome/free-solid-svg-icons";
import React from "react";
function CustomerProfile() {
    document.addEventListener('DOMContentLoaded', function() {
        const fileInput = document.getElementById('avatar-upload');
        fileInput.addEventListener('change', handleFileUpload);
    
        function handleFileUpload(event) {
            const file = event.target.files[0];
            // Handle the file upload logic later =)
        }
    });

    const handleMouseEnter = () => {
        const avar = document.getElementById('avartar');
        avar.style.opacity = 0.5;
      };
    
      const handleMouseLeave = () => {
        const avar = document.getElementById('avartar');
        avar.style.opacity = 1;
      };

    return ( 
        <>
           <div className="flex">
                <SideBar/>
                <div style={{marginLeft: 40, width: '100vw'}} >
                    <h1 className='font-medium text-3xl mt-16'>Profile Settings</h1>
                    <div className="flex">
                    <div className="flex-2">
                        <label htmlFor="avatar-upload" className="avatar-container mt-2">
                            <img src="https://i.pinimg.com/originals/c0/50/07/c050078eb83a332666a3847ff748023d.jpg" alt="avatar" className="avatar-input" id="avartar"/>
                            <div className="overlay" onMouseEnter={handleMouseEnter}
                                                     onMouseLeave={handleMouseLeave}>
                                <FontAwesomeIcon icon={faCamera}/>
                            </div>
                        </label>
                        <input type="file" id="avatar-upload" style={{display: 'none'}} />
                    </div>
                        <div  className="vertical-line"></div> 
                        <div style={{flex: 4}}>

                            <p className="font-medium underline mt-4">Mr. Mong Ky Dy Lo Phi</p>
                            <p> West Blue (Customer's address)
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-button"/>
                            </p>
                                
                            <p>I am Monkey D Luffy - who will become King Of Pirate in the future (Customer's bio)
                                <FontAwesomeIcon icon={faPenToSquare} className="edit-button"/>
                            </p>

                        </div>
                        <div className="flex-5 flex justify-center items-center" >
                        </div>
                    </div>

                    {/* line 1 */}
                    <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                   <div className="flex">
                        <div class="form-group">
                            <label for="first" class="article">First Name</label>
                            <input type="text" id="first" class="input-article" value="Luffy" />
                        </div>
                        <div class="form-group">
                            <label for="last" class="article">Last Name</label>
                            <input type="text" id="last" class="input-article" value="Monkey D" />
                        </div>
                   </div>
                   <div class="form-group">
                            <label for="user" class="article">User Name</label>
                            <input type="user" id="last" class="input-article" style={{width: '90%'}} value="kingofpirateLOVEqueenofpirate" />
                    </div>

                    <div className="flex">
                        <div class="form-group">
                            <label for="email" class="article">Email Address</label>
                            <input type="text" id="email" class="input-article" value="luffy@gmail.com" />
                        </div>
                        <div class="form-group">
                            <label for="phone" class="article">Phone Numer</label>
                            <input type="text" id="phone" class="input-article" value="+84 3481012384" />
                        </div>
                   </div>

                   {/* line 2 */}
                   <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <label for="last" class="article">Gender</label>
                    <div className="flex mt-4">
                        <input className="input-radio" type="radio" name="gt"/>
                        <div className="flex justify-center items-center">
                            <p className="radio-text-car-sort">Male</p>
                        </div>
                    </div>
                    <div className="flex mt-4">
                        <input className="input-radio" type="radio"  name="gt"/>
                        <div className="flex justify-center items-center">
                            <p className="radio-text-car-sort">Female</p>
                        </div>
                    </div>

                     {/* line 3 */}
                   <div className="flex items-center">
                        <div className="horizontal-line"></div>
                    </div>

                    <div className="flex">
                        <div class="form-group">
                            <label for="cr" class="article">Current Password</label>
                            <input type="password" id="cr" class="input-article" />
                        </div>
                        <div class="form-group">
                            <label for="ne" class="article">New Password</label>
                            <input type="password" id="ne" class="input-article"/>
                        </div>
                   </div>
                   <div class="form-group" style={{marginTop: 15}}>
                            <label for="user" class="article">Confirm New Password</label>
                            <input type="password" id="user" class="input-article" style={{width: '90%'}}/>
                    </div>


                    <div style={{width: '90%'}} >
                        <button className="button button--light mb-10">Cancel</button>
                        <button className="button button--light mr-12 mb-10">Save Change</button>
                    </div>
                </div>
           </div>
        </>
     );
}

export default CustomerProfile;