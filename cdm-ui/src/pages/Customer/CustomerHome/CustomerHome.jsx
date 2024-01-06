import SideBar from '../../../layouts/components/SideBar';
import '../../../components/DashboardItem/DashboardItem.css'
import DashboardItem from '../../../components/DashboardItem'

import { useState,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CustomerHome() {
    const navigate = useNavigate();
    const dashboardItems = [
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/solar-marketing_636x300_4bd7119e4705e.jpg' alt='solar' className='dashboard__item-img'/>,
          article: 'Appointment',
          content: 'Book a test drive or get your car',
          button: <button className='dashboard__item-button' onClick={() => navigate('/customerhome/bookappointment')}>Book Appointment</button>
        },
        {
          img: <img src='https://digitalassets.tesla.com/oxp/image/upload/v1692297205/dscf6059-4_acb1b643864e2.png' alt='order' className='dashboard__item-img'/>,
          article: 'Vehicle',
          content: 'Discovery our vehicle now',
          button: <button className='dashboard__item-button' onClick={() => navigate('/vehicle')}>View All</button>
        }
      ]

    return ( 
        <div className='bg-white dark:bg-slate-800 h-screen'>
            <span className='flex'>
                <SideBar className='flex-1'/>
                <div className='hidden sm:block flex flex-col'>
                    <h1 className='font-medium text-3xl mt-16 ml-10 text-black dark:text-white'>Dashboard</h1>
                    <div>
                        <span className='dashboard '>
                            <DashboardItem data={dashboardItems[0]}/>
                            <DashboardItem data={dashboardItems[1]}/>
                        </span>
                        
                    </div>
                </div>
            </span>
            <div className='block sm:hidden'>
                      <DashboardItem data={dashboardItems[0]}/>
                      <DashboardItem data={dashboardItems[1]} className="mt-4"/>
            </div>
      </div> 
     );
}

export default CustomerHome;