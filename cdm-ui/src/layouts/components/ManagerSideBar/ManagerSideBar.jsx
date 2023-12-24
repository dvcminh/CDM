import { faHouse, faRightFromBracket, faUser, faUsers, faPeopleGroup, faCube , faFileLines } from '@fortawesome/free-solid-svg-icons';
import './ManagerSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';
import {
  FaHome,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'


import { ArrowRightOnRectangleIcon, CreditCardIcon, HomeIcon, NewspaperIcon, ShoppingBagIcon, UserCircleIcon, UsersIcon, UserGroupIcon, Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { Chat, CreditCard, ShoppingBag } from '@mui/icons-material';

function ManagerSideBar() {
  const sidebarItem = [
    {
      icon: <HomeIcon className='w-6 h-auto' />,
      title: 'Dashboard',
      to: config.routes.managerhome
    },
    {
      icon: <UserCircleIcon className='w-6 h-auto' />,
      title: 'Profile Settings',
      to: config.routes.managerprofile
    },
    {
      icon: <UserGroupIcon  className='w-6 h-auto' />,
      title: 'Staffs',
      to: config.routes.managestaff
    },
    {
      icon: <UsersIcon className='w-6 h-auto' />,
      title: 'Customers',
      to: config.routes.managecustomer
    },
    {
      icon: <Square3Stack3DIcon className='w-6 h-auto' />,
      title: 'Inventories',
      to: config.routes.managecar
    }
    ,
    {
      icon: <NewspaperIcon className='w-6 h-auto' />,
      title: 'Reports',
      to: config.routes.managereport
    }
    ,
    {
      icon: <Chat className='w-6 h-auto' />,
      title: 'Conversation',
      to: config.routes.managerchat
    }
    ,
    {
      icon: <ArrowRightOnRectangleIcon className='w-6 h-auto' />,
      title: 'Sign Out',
      to: config.routes.start
    }
  ];

  const location = useLocation();

  return (
   <div style={{height: '90vh'}} className='hidden lg:block'>
     <div className='flex flex-col items-center h-4/5 mt-32' >
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='no-decoration'>
            <div className={`sidebar-item ${location.pathname === item.to ? 'active' : ''}`}>
              {item.icon}
              <div className='flex justify-center items-center'><p className='sidebar__title'>{item.title}</p></div>
            </div>
          </Link>
        </div>
      ))}
    </div>
   </div>
  );
}

export default ManagerSideBar;