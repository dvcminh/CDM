import React, { useState } from 'react';
import { faCircleQuestion, faCircleUser } from '@fortawesome/free-regular-svg-icons';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../config';

function NavBar() {
  const shopItem = [
    {
      img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540076/charging-Shop_tpwfez.png" alt='charging' className='shop-item__img' />,
      title: 'Charging',
    },
    {
      img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540116/accessories_Shop_djcuaq.png" alt='accessories' className='shop-item__img'/>,
      title: 'Vehicle Accessories',
    },
    {
      img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" alt='apparel' className='shop-item__img'/>,
      title: 'Apparel',
    },
    {
        img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540187/lifestyle_Shop_fxriqy.png" alt='lifestyle' className='shop-item__img'/>,
        title: 'Lifestyle',
      }
  ];

  const vehicleItem = [
    {
      img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt='S' className='vehicle-item__img' />,
      title: 'Model S',
      to: config.routes.vehicleS
    },
    {
      img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt='3' className='vehicle-item__img'/>,
      title: 'Model 3',
      to: config.routes.vehicleS
    },
    {
      img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt='X' className='vehicle-item__img'/>,
      title: 'Model X',
      to: config.routes.vehicleS
    },
    {
        img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt='Y' className='vehicle-item__img'/>,
        title: 'Model Y',
        to: config.routes.vehicleS
      }
  ];

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [gridPosition, setGridPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    setGridPosition({ top: rect.bottom, left: rect.left });
    setIsGridOpen(true);
  };

  const handleMouseLeave = () => {
    setIsGridOpen(false);
  };

  const [isVehicleGridOpen, setIsVehicleGridOpen] = useState(false);
  const [gridVehiclePosition, setVehicleGridPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter_vehicle = (e) => {
    const rect = e.target.getBoundingClientRect();
    setVehicleGridPosition({ top: rect.bottom, left: rect.left });
    setIsVehicleGridOpen(true);
  };

  const handleMouseLeave_vehicle = () => {
    setIsVehicleGridOpen(false);
  };

  return (
    <>
      <div className='mt-2 h-10'>
          <div>
            <span className='flex float-right'>
              <FontAwesomeIcon icon={faCircleQuestion} className='navbar__icon'/>
              <FontAwesomeIcon icon={faGlobe} className='navbar__icon'/>
              <Link to={config.routes.customerhome}>
                  <FontAwesomeIcon icon={faCircleUser} className='navbar__icon'/>
              </Link>
            </span> 
            <span className='flex items-center justify-center ml-20'>
              <p  className='navbar__article'
                  onMouseEnter={handleMouseEnter_vehicle}
                  onMouseLeave={handleMouseLeave_vehicle}
              
              >Vehicle
              {isVehicleGridOpen && (
                  <>
                    <div className='content-behind-shop-grid' onMouseEnter={handleMouseLeave_vehicle}></div>
                    <div className='vehicle-grid'>
                      {vehicleItem.map((item, index) => (
                        <div key={index}>
                          <Link to={item.to} className='link'>
                            <div className='vehicle-item-container'>
                              {item.img}
                              <p className='text-center text-black'>{item.title}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </>
                )} 
              </p>
              <p className='navbar__article'>Charging</p>
              <p className='navbar__article'>Energy</p>
              <p className='navbar__article'>Discover</p>
              <p
                className='navbar__article'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Shop
                {isGridOpen && (
                  <>
                    <div className='content-behind-shop-grid' onMouseEnter={handleMouseLeave}></div>
                    <div className='shop-grid'>
                      {shopItem.map((item, index) => (
                        <div key={index}>
                          <div className='shop-item-container'>
                            {item.img}
                            <p className='text-center'>{item.title}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </p>
            </span>
          </div>
      </div>
    </>
  );
}

export default NavBar;
