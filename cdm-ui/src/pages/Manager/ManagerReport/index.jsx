import React, { useState } from 'react';
import ManagerSideBar from "../../../layouts/components/ManagerSideBar";


import './ManageReport.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


const ManageReport = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const reports = [
    { staff: 'Nguyễn Hoàng Minh', problem: 'website', img: 'https://www.kanatechsys.co.ke/wp-content/uploads/2023/04/Reasons-why-you-must-have-a-company-website-in-Kenya.-1024x574.png' , date: '21-10-2023', status: 'complete', detail: 'tôi có một báo cáo về việc ...........................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa................' },
    { staff: 'Vũ Đức Minh', problem: 'staff', img: 'https://fellow.app/wp-content/uploads/2022/08/staff-senior-engineer.jpg' , date: '21-10-2023', status: 'pending', detail: 'tôi có một báo cáo về việc .........................zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz' },
    { staff: 'Nguyễn Nhật Khang', problem: 'car', img: 'https://www.topgear.com/sites/default/files/2022/07/6_0.jpg' , date: '21-10-2023', status: 'processing', detail: 'tôi có điều muốn nói ..........................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { staff: 'Nguyễn Hải Minh', problem: 'website', img: 'https://www.actuatedigital.co.ke/wp-content/uploads/2023/07/Actuate-Digital-Solutions_Website-Development.jpg' , date: '21-10-2023', status: 'complete' },
  ];

  const renderStatus = (status) => {
    const statusClasses = {
      complete: 'green',
      pending: 'red',
      processing: 'orange'
    };
    return <span className={`status ${statusClasses[status]}`}>• {status}</span>;
  };

  const DetailModal = ({ report, onClose }) => {
    if (!report) return null;
  
    return (
      <div className={`modal ${report ? 'active' : ''}`}>
        <div className="modal-content">
          <div className='title-bar'>
          <div className='heading-report'>Detail</div>
          <button class="close-button" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} className='closes-icon' /></button>
          </div>
          <div className='detail-box'>
            <p className='flex mt-6 ml-10'><strong className='mr-12'>{report.staff}</strong> <div className='mr-12'>{report.date}</div> {report.status.toUpperCase()}</p>
            <textarea rows={12} className='area-detail' readOnly value={report.detail}></textarea>
            
          </div>
        </div>
      </div>
    );
  };

  const ImageModal = ({ src, onClose }) => {
    if (!src) return null;
  
    return (
      <div className={`modal ${selectedImage ? 'active' : ''}`}>
        <div className="modal-content">
        <div className='title-bar'>
          <div className='heading-report'>Image</div>
          <button class="close-button" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} className='closes-icon' /></button>
        </div>          
        <img src={src} alt="Expanded" style={{ width: '100%' }} />
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
        <span className='flex'>
        <ManagerSideBar className='flex-1'/>
        <div className='flex flex-col'>
        <h1 className='font-medium text-3xl mt-16 ml-10'>Report</h1>
        <table className='mt-12 ml-10'>
            <thead>
            <tr>
                <th>STAFF</th>
                <th>PROBLEM</th>
                <th>IMAGE</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>ACTION</th>
            </tr>
            </thead>
            <tbody>
            {reports.map((report, index) => (
                <tr key={index}>
                <td className='customer-col'>{report.staff}</td>
                <td className='problem-col'>{report.problem}</td>
                <td className='img-col'> <img src={report.img} className='img-mini' onClick={() => handleImageClick(report.img)} alt="preview" width="60" height="60" /> </td>
                <td className='date-col'>{report.date}</td>
                <td className='status-col'>{renderStatus(report.status)}</td>
                <td className='view-col'>
                <button className='view-btn' onClick={() => handleViewClick(report)}>View</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        {selectedReport && <DetailModal report={selectedReport} onClose={handleCloseModal} />}
        {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
        </div>
        </span>
    </div>
  );
};

export default ManageReport;