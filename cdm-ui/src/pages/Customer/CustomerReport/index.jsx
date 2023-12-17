import SideBar from "../../../layouts/components/SideBar";
import "./CustomerReport.css";
import React, { useState } from "react";
import { useRef } from "react";
import { cdmApi } from "../../../misc/cdmApi";

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

  return (
    <>
      <div className="flex">
        <SideBar className="flex-1" />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl mt-16 ml-10">Report</h1>
          <div className="report-container">
            <div className="left-subcontainer">
              <div className="flex flex-col mt-14 ml-10">
                <div className="title">Problem:</div>
                <div>
                  <input
                    className="problem-box bg-gray-100"
                    type="text"
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-14 ml-10">
                <div className="title">Image:</div>
                <div className="image-box">
                  <div className="container-img">
                    <input
                      type="file"
                    //   ref={fileInput}
                      style={{ display: "none" }}
                    //   onChange={handleImageChange}
                    />
                    {/* {file && ( */}
                      <div className="image-info">
                        <img
                        //   src={imagePreviewUrl}
                          alt="preview"
                          width="50"
                          height="50"
                        />
                        {/* <span className="image-name">{file.name}</span> */}
                      </div>
                    {/* )} */}
                  </div>
                  {/* <button className="btn-add" onClick={handleButtonClick}>
                    Add
                  </button> */}
                </div>
              </div>
            </div>
            <div className="right-subcontainer">
              <div className="flex flex-col mt-14 ml-16">
                <div className="title">Description:</div>
                <div>
                  <textarea className="description-box bg-gray-100" onChange={(e) => setDescription(e.target.value)} type="text" />
                </div>

                <button type="submit" onClick={handleSubmit} className="btn-report">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReport;
