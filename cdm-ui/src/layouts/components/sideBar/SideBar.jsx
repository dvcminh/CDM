import { faCreditCard, faCube, faHome, faHouse, faRightFromBracket, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import config from '../../../config';
import CustomerHome from '../../../pages/CustomerHome';
function SideBar(){
    const sidebarItem  =[
        {
            icon: <FontAwesomeIcon icon={faHouse} className='sidebar__icon'/>,
            title: 'Dashboard',
            to: '/customerhome'
        }, 
        {
            icon: <FontAwesomeIcon icon={faUser} className='sidebar__icon'/>,
            title: 'Profile Settings',
            to: '/customerprofile'
        }, 
        {
            icon: <FontAwesomeIcon icon={faCreditCard} className='sidebar__icon'/>,
            title: 'Payment Methods',
            to: '/customerpayment'
        }, 
        {
            icon: <FontAwesomeIcon icon={faCube} className='sidebar__icon'/>,
            title: 'Refer and Earn',
            to: '/customerrefer'
        }, 
        {
            icon: <FontAwesomeIcon icon={faShirt} className='sidebar__icon'/>,
            title: 'Order History',
            to: '/customerorderhistory'
        }
        , 
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icon'/>,
            title: 'Sign Out',
            to: '/'
        }
        
    ]
    return (
        <div className='sidebar'>
                  {sidebarItem.map((item, index) => (
                    <div key={index}>
                      <div className='sidebar-item'>
                            {item.icon}
                            <p className='sidebar__title'>{item.title}</p>
                        </div>
                    </div>
                  ))}
                </div>
    )
}

export default SideBar;