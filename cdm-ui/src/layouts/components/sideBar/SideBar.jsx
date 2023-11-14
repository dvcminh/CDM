import { faCreditCard, faCube, faHome, faHouse, faRightFromBracket, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';

function SideBar() {
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon' />,
      title: 'Dashboard',
      to: config.routes.customerhome
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Profile Settings',
      to: config.routes.customerprofile
    },
    {
      icon: <FontAwesomeIcon icon={faCreditCard} className='sidebar__icon' />,
      title: 'Payment Methods',
      to: config.routes.customerpayment
    },
    {
      icon: <FontAwesomeIcon icon={faCube} className='sidebar__icon' />,
      title: 'Refer and Earn',
      to: config.routes.c
    },
    {
      icon: <FontAwesomeIcon icon={faShirt} className='sidebar__icon' />,
      title: 'Order History',
      to: config.routes.customerorderhis
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Sign Out',
      to: config.routes.start
    }
  ];

  const location = useLocation();

  return (
    <div className='sidebar'>
      {sidebarItem.map((item, index) => (
        <div key={index}>
          <Link to={item.to} className='link'>
            <div className={`sidebar-item ${location.pathname === item.to ? 'active' : ''}`}>
              {item.icon}
              <p className='sidebar__title'>{item.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default SideBar;