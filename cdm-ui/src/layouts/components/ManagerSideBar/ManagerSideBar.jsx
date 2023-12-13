import { faHouse, faRightFromBracket, faUser, faUsers, faPeopleGroup, faCube } from '@fortawesome/free-solid-svg-icons';
import './ManagerSideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import config from '../../../config';

function ManagerSideBar() {
  const sidebarItem = [
    {
      icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon' />,
      title: 'Dashboard',
      to: config.routes.managerhome
    },
    {
      icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon' />,
      title: 'Profile Settings',
      to: config.routes.managerprofile
    },
    {
      icon: <FontAwesomeIcon icon={faPeopleGroup} className='sidebar__icon' />,
      title: 'Staffs',
      to: config.routes.managestaff
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className='sidebar__icon' />,
      title: 'Customers',
      to: config.routes.managecustomer
    },
    {
      icon: <FontAwesomeIcon icon={faCube} className='sidebar__icon' />,
      title: 'Inventories',
      to: config.routes.c
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon' />,
      title: 'Sign Out',
      to: config.routes.start
    }
  ];

  const location = useLocation();

  return (
   <div style={{height: '90vh'}}>
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