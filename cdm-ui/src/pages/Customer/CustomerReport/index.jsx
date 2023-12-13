import SideBar from "../../../layouts/components/SideBar";
import './CustomerReport.css'
import React, { useState } from 'react';
import { useRef } from 'react';

function CustomerReport() {
    
        const [file, setFile] = useState(null);
        const [imagePreviewUrl, setImagePreviewUrl] = useState('');

        const fileInput = useRef();

        const handleButtonClick = () => {
          fileInput.current.click();
        }
      
        const handleImageChange = (e) => {
          e.preventDefault();
      
          let reader = new FileReader();
          let file = e.target.files[0];
      
          reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
          }
      
          reader.readAsDataURL(file);
        }
    
    return ( 
        <>
           <div className="flex">
           <SideBar className='flex-1'/>
                <div className='flex flex-col'>
                    <h1 className='font-medium text-3xl mt-16 ml-10'>Report</h1>
                    <div className="report-container">
                       <div className="left-subcontainer">
                            <div className="flex flex-col mt-14 ml-10">
                                <div className="title">
                                    Problem:
                                </div>
                                <div>
                                    <input className="problem-box" type="text" />
                                </div>
                            </div>
                            <div className="flex flex-col mt-14 ml-10">
                                <div className="title">
                                    Image:
                                </div>
                                <div className="image-box">
                                
                                    <div className="container-img">
                                    <input
                                    type="file"
                                    ref={fileInput}
                                    style={{ display: 'none' }}
                                    onChange={handleImageChange}
                                    />
                                    {file && (
                                        <div className="image-info">
                                            <img src={imagePreviewUrl} alt="preview" width="50" height="50" />
                                            <span className="image-name">{file.name}</span>
                                        </div>
                                    )}
                                    </div>
                                    <button className="btn-add" onClick={handleButtonClick}>Add</button>
                                
                                </div>
                            </div>
                       </div>
                       <div className="right-subcontainer">
                            <div className="flex flex-col mt-14 ml-16">
                                <div className="title">
                                    Description:
                                </div>
                                <div>
                                    <textarea className="description-box" type="text" />
                                </div>
                                
                                <button className="btn-report">Send</button>
                                
                            </div>
                       </div>
                    </div>
                </div>
           </div>
        </>
     );
}

export default CustomerReport;