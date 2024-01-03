import { faCreditCard, faCube, faHome, faHouse, faRightFromBracket, faShirt, faUser, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';
import {
  FaHome,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare
} from 'react-icons/fa'

import { ArrowRightOnRectangleIcon, CreditCardIcon, HomeIcon, NewspaperIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { CreditCard, ShoppingBag } from '@mui/icons-material';

function SideBar() {
  const sidebarItem = [
    {
      icon: <HomeIcon className='w-6 h-auto' />,
      title: 'Dashboard',
      to: config.routes.customerhome
    },
    {
      icon: <UserCircleIcon className='w-6 h-auto' />,
      title: 'Profile Settings',
      to: config.routes.customerprofile
    },
    {
      icon: <CreditCardIcon  className='w-6 h-auto' />,
      title: 'Payment Methods',
      to: config.routes.customerpayment
    },
    {
      icon: <ShoppingBagIcon className='w-6 h-auto' />,
      title: 'Order History',
      to: config.routes.customerorderhis
    },
    {
      icon: <NewspaperIcon className='w-6 h-auto' />,
      title: 'Report',
      to: config.routes.customerreport
    }
    ,
    {
      icon: <ArrowRightOnRectangleIcon className='w-6 h-auto' />,
      title: 'Sign Out',
      to: config.routes.start
    }
  ];

  const location = useLocation();
  const handleClick = (title) => {
    if (title === 'Sign Out') {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("cart");
    }
  };
  return (
   <div style={{height: '90vh'}} className='hidden lg:block'>
     <div className='flex flex-col items-center h-4/5 mt-32' >
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='no-decoration' onClick={() => handleClick(item.title)}>
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

export default SideBar;