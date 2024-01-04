import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { cdmApi } from "../../../misc/cdmApi";
import ManagerSideBar from "../../../layouts/components/ManagerSideBar"
const StaffReport = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [report, setReport] = useState([]);
  const getReport = async () => {
    await cdmApi.getCustomerReport()
      .then((response) => {
        console.log("Report")
        console.log(response.data);
        setReport(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReport();
  }, []);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = report.slice(firstIndex, lastIndex);
  const npage = Math.ceil(report.length / recordsPerPage);
  const numbers = [ ... Array(npage +1).keys()].slice(1);

  function changeCPage(id){
    setCurrentPage(id);
  }
  const renderStatus = (status) => {
    const statusClasses = {
      complete: "green",
      pending: "red",
      processing: "orange",
    };
    return (
      <span className={`status ${statusClasses[status]}`}>• {status}</span>
    );
  };

  const DetailModal = ({ report, onClose }) => {
    if (!report) return null;
    return (
      <div className={`modal ${report ? "active" : ""}`}>
        <div className="modal-content">
          <div className="title-bar">
            <div className="heading-report">Detail</div>
            <button class="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} className="closes-icon" />
            </button>
          </div>
          <div className="detail-box">
            <p className="flex mt-6 ml-10">
              <strong className="mr-12">{report.customer}</strong>{" "}
              <div className="mr-12">{report.date}</div>{" "}
              {report.status.toUpperCase()}
            </p>
            <textarea
              rows={12}
              className="area-detail bg-gray-100 mt-6 ml-10"
              readOnly
              value={report.description}
            ></textarea>
          </div>
        </div>
      </div>
    );
  };

  const ImageModal = ({ src, onClose }) => {
    if (!src) return null;

    return (
      <div className={`modal ${selectedImage ? "active" : ""}`}>
        <div className="modal-content">
          <div className="title-bar">
            <div className="heading-report">Image</div>
            <button class="close-button" onClick={onClose}>
              <FontAwesomeIcon icon={faCircleXmark} className="closes-icon" />
            </button>
          </div>
          <img src={src} alt="Expanded" style={{ width: "100%" }} />
        </div>
      </div>
    );
  };

  const handleCloseModal = () => {
    setSelectedReport(null);
  };

  const handleViewClick = (report) => {
    setSelectedReport(report);
  };

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <span className="flex">
        <ManagerSideBar className="flex-1" />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl mt-16 ml-10">Report</h1>
          <table className="mt-12 ml-10">
            <thead>
              <tr>
                <th>No.</th>
                <th>User ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Status</th>
                <th>Type</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {records.map((report, index) => (
                <tr key={report.id}>
                  <td className="id-col">{(currentPage - 1) * recordsPerPage + index + 1}</td>
                  <td className="customer-col">{report.userId}</td>
                  <td className="img-col">NULL</td>
                  <td className="problem-col">{report.title}</td>
                  {/* <td className="img-col">
                    {" "}
                    <img
                      src={report.img}
                      className="img-mini"
                      onClick={() => handleImageClick(report.img)}
                      alt="preview"
                      width="60"
                      height="60"
                    />{" "}
                  </td> */}
                  {/* <td className="date-col">{report.date}</td> */}
                  <td className="status-col">{report.status}</td>
                  <td className="type-col">{report.type}</td>
                  <td className="view-col">
                    <button
                      className="view-btn"
                      onClick={() => handleViewClick(report)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
            {selectedReport && (
              <DetailModal report={selectedReport} onClose={handleCloseModal} />
            )}
            {selectedImage && (
              <ImageModal
                src={selectedImage}
                onClose={() => setSelectedImage(null)}
              />
            )}
            
        </div>
        
      </span>
      <div className='float-right mr-32' style={{marginTop: -100}}>
                    <nav >
                      <ul className="flex items-center -space-x-px h-10 text-base">
                        <li style={{margin: 0}}>
                          <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                          </a>
                        </li>
                          {
                              numbers.map((n, i) => (
                                  <li className={ `flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  ${currentPage === n ? 'active' : ''}` } key={i}>
                                      <a href="#" onClick={() => changeCPage(n)} >{n}</a>
                                  </li>
                              ))
                          }
                        
                        <li>
                          <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                </div>
    </div>
    
  );
};

export default StaffReport;
