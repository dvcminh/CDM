import React, { useState, useEffect } from "react";
import SideBarStaff from "../../../layouts/components/SideBarStaff";
import "./StaffReport.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { cdmApi } from "../../../misc/cdmApi";

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

  // const reports = [
  //   { customer: 'Nguyễn Hoàng Minh', problem: 'website', img: 'https://www.kanatechsys.co.ke/wp-content/uploads/2023/04/Reasons-why-you-must-have-a-company-website-in-Kenya.-1024x574.png' , date: '21-10-2023', status: 'complete', detail: 'tôi có một báo cáo về việc ...........................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa................' },
  //   { customer: 'Vũ Đức Minh', problem: 'staff', img: 'https://fellow.app/wp-content/uploads/2022/08/staff-senior-engineer.jpg' , date: '21-10-2023', status: 'pending', detail: 'tôi có một báo cáo về việc .........................zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz' },
  //   { customer: 'Nguyễn Nhật Khang', problem: 'car', img: 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg' , date: '21-10-2023', status: 'processing', detail: 'tôi có điều muốn nói ..........................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
  //   { customer: 'Nguyễn Hải Minh', problem: 'website', img: 'https://www.actuatedigital.co.ke/wp-content/uploads/2023/07/Actuate-Digital-Solutions_Website-Development.jpg' , date: '21-10-2023', status: 'complete' },
  // ];

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
        <SideBarStaff className="flex-1" />
        <div className="flex flex-col">
          <h1 className="font-medium text-3xl mt-16 ml-10">Report</h1>
          <table className="mt-12 ml-10">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Status</th>
                <th>Type</th>
                <th>Created Date</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              {report.map((report, index) => (
                <tr key={report.id}>
                  <td className="id-col">{index + 1}</td>
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
    </div>
  );
};

export default StaffReport;
