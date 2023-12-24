import './SideBarStaff.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRightFromBracket , faUser, faFileLines, faUsers , faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EarbudsBatteryOutlinedIcon from '@mui/icons-material/EarbudsBatteryOutlined';
import config from '../../../config';

function SideBarStaff() {
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon' />,
      title: 'Dashboard',
      to: config.routes.staffhome
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Profile Settings',
      to: config.routes.staffprofile
    },
    {
      icon: <FontAwesomeIcon icon={faBagShopping} className='sidebar__icon' />,
      title: 'Order',
      to: config.routes.stafforder
    },    
    {
        icon: <FontAwesomeIcon icon={faFileLines} className='sidebar__icon' />,
        title: 'Reports',
        to: config.routes.staffreport
    },
    {
        icon: <FontAwesomeIcon icon={faUsers} className='sidebar__icon' />,
        title: 'Customers',
        to: config.routes.staffcustomer
    },
    {
      icon: <EarbudsBatteryOutlinedIcon className='w-6 h-auto' />,
      title: 'Products',
      to: config.routes.staffshop
    },
    {
      icon: <DirectionsCarFilledOutlinedIcon className='w-6 h-auto' />,
      title: 'Inventories',
      to: config.routes.staffcar
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Sign Out',
      to: config.routes.start
    }
  ];

  const location = useLocation();

  return (
   <div style={{height: 'auto'}}>
     <div className='flex flex-col items-center h-4/5 mt-24' >
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

export default SideBarStaff;