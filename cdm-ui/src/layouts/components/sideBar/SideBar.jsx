import { faCreditCard, faCube, faHome, faHouse, faRightFromBracket, faShirt, faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import config from '../../../config';
import CustomerHome from '../../../pages/CustomerHome';
function SideBar(){
    const sidebarItem  =[
        {
            icon: <FontAwesomeIcon icon={faHouse} className='icon-item'/>,
            title: 'Dashboard',
            to: '/customerhome'
        }, 
        {
            icon: <FontAwesomeIcon icon={faUser} className='icon-item'/>,
            title: 'Profile Settings',
            to: '/customerprofile'
        }, 
        {
            icon: <FontAwesomeIcon icon={faCreditCard} className='icon-item'/>,
            title: 'Payment Methods',
            to: '/customerpayment'
        }, 
        {
            icon: <FontAwesomeIcon icon={faCube} className='icon-item'/>,
            title: 'Refer and Earn',
            to: '/customerrefer'
        }, 
        {
            icon: <FontAwesomeIcon icon={faShirt} className='icon-item'/>,
            title: 'Order History',
            to: '/customerorderhistory'
        }
        , 
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} className='icon-item'/>,
            title: 'Sign Out',
            to: '/'
        }
        
    ]
    return (
        <div className='side-bar'>
                  {sidebarItem.map((item, index) => (
                    <div key={index}>
                      <div className='side-bar-item'>
                            {item.icon}
                            <p className='title'>{item.title}</p>
                        </div>
                    </div>
                  ))}
                </div>
    )
}

export default SideBar;