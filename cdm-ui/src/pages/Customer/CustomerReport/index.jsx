import SideBar from "../../../layouts/components/SideBar";
import "./CustomerReport.css";
import React, { useState } from "react";
import { useRef } from "react";
import { cdmApi } from "../../../misc/cdmApi";
import { Checkbox, Navbar } from "@material-tailwind/react";
import ImageUploading from 'react-images-uploading';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faRectangleXmark, faUpload, faXmark } from "@fortawesome/free-solid-svg-icons";

function CustomerReport() {
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [userId, setUserId] = useState("");
    const [file, setFile] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");
    const fileInput = useRef(null)
    const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleChange = (event) => {
    setReport({ ...report, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = user.id;
    const report = { title, description, userId, image, type: "USER" };
    await cdmApi.createCustomerReport(report)
      .then((response) => {
        alert("Report successfully!");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [images, setImages] = React.useState([]);
  const maxNumber = 4;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <>
        <div className="flex">
            <SideBar />
            <div style={{ marginLeft: 40, width: "100vw" }}>
                  <h1 className="font-medium text-3xl mt-16">Profile Settings</h1>
                  <p className="mt-8 xl:mr-2 mr-4">Which of the following options best describes the type of issue you are experiencing</p>
                  <div className="flex flex-col xl:ml-8 ml-2">
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Website Problem</label></div>
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Service Problem</label></div>
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Product's Problem</label></div>

                  </div>
                  <p className="mt-4 xl:mr-2 mr-4">Please describe the problem you are experiencing in the space below. Be as descriptive as possible so we can be sure to help you as best as we can.</p>
                  <textarea  rows="4" className="mt-4 mr-2 xl:mr-24 block p-2.5 w-4/5 text-sm text-black rounded-lg border border-gray-700 focus:border-black bg-white" placeholder="Write your thoughts here..."></textarea>
                  <p className="mt-4 xl:mr-2 mr-4">Attach Image (if neccessary)</p>
                  <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        <div className="upload__image-wrapper mt-2">
                          <button className="border-solid border-2 border-black hover:bg-lime-200"
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            <FontAwesomeIcon icon={faUpload}/>
                          </button>
                          &nbsp;
                          <button className="border-solid border-2 border-black px-3 hover:bg-red-200" onClick={onImageRemoveAll}><FontAwesomeIcon icon={faXmark}/></button>
                          <div className="flex xl:mr-0 mr-2" style={{marginLeft: -8}}>
                              {imageList.map((image, index) => (
                                  <div key={index} className="image-item mt-2 ml-2">
                                        <img src={image['data_url']} alt="" width="100" />
                                        <div className="image-item__btn-wrapper ml-2 ">
                                          <button onClick={() => onImageUpdate(index)}><FontAwesomeIcon icon={faPenToSquare}/></button>
                                          <button onClick={() => onImageRemove(index)}><FontAwesomeIcon icon={faRectangleXmark}/></button>
                                        </div>
                                  </div>
                                ))}
                          </div>
                        </div>
                      )}
                    </ImageUploading>
                    <p className="mt-4 xl:mr-2 mr-4">How would you like us to contact you? Please select an option from the list below.</p>
                    <div className="flex flex-col xl:ml-8 ml-2">
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Phone Call</label></div>
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Text Message</label></div>
                        <div className="flex"><Checkbox color="blue" defaultChecked /><label className="mt-2.5" htmlFor="">Email Address</label></div>
                  </div>

                  <button class="mt-2 mb-64 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-center mr-2">
                        Submit
                  </button>
            </div>
        </div>
    </>
  );
}

export default CustomerReport;
