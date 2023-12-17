import React , { useState } from 'react';
import SideBarStaff from '../../../layouts/components/SideBarStaff';
import './StaffOrder.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const StaffOrder = () => {
    const [selectedReport, setSelectedReport] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const reports = [
        { customer: 'Nguyễn Hoàng Minh', product: 'Apple MacBook Pro 17"', img: 'https://images.macrumors.com/t/Lo8cqaC9hCeaj2tvFeeSBqbG39s=/1600x900/smart/article-new/2017/05/apple-mbp2011-17-angle_osx-lg.jpg' , date: '21-10-2023', status: 'complete', category: 'Laptop',  price:'2999' },
        { customer: 'Vũ Đức Minh', product: 'Microsoft Surface Pro', img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4P7Wb?ver=24e9' , date: '21-10-2023', status: 'pending', category: 'Laptop PC', price: '1999' },
        { customer: 'Nguyễn Nhật Khang', product: 'Magic Mouse 2', img: 'https://cdn.tgdd.vn/hoi-dap/1359212/Thumbnail/co-nen-mua-apple-magic-mouse-2-lieu-co-xung-dang-voi-so333.jpg' , date: '21-10-2023', status: 'processing', category: 'Accessories' , price: '99' },
        { customer: 'Nguyễn Hải Minh', product: 'Google Pixel Phone', img: 'https://fdn.gsmarena.com/imgroot/static/headers/makers/google-2023-1.jpg' , date: '21-10-2023', status: 'complete' , category: 'Phone' , price: '199' },
      ];

    const renderStatus = (status) => {
        const statusClasses = {
          complete: 'green',
          pending: 'red',
          processing: 'orange'
        };
        return <span className={`status ${statusClasses[status]}`}>• {status}</span>;
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
    
      const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
      };

    return(
        <div>
        <span className='flex'>
        <SideBarStaff className='flex-1'/>
        <div className="ml-8">
                    <h1 className='font-medium text-3xl mt-16'>Order History</h1>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-16">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Customer
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Image
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Date
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {reports.map((report, index) => (
                                <tr key={index} class="odd:bg-white even:bg-gray-300">
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{report.customer}</td>
                                <td class="px-3 py-4">{report.product}</td>
                                <td class="px-6 py-4"> <img src={report.img} className='img-mini' onClick={() => handleImageClick(report.img)} alt="preview" width="60" height="60" /> </td>
                                <td class="px-6 py-4">{report.date}</td>
                                <td class="px-6 py-4">{report.category}</td>
                                <td class="px-6 py-4">${report.price}</td>
                                <td class="px-6 py-4">{renderStatus(report.status)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {selectedImage && <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />}
                    </div>
                </div>
        </span>
    </div>
    );
};


export default StaffOrder