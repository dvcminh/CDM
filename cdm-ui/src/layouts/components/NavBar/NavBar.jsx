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
      img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540076/charging-Shop_tpwfez.png" alt='charging' className='item-img' />,
      title: 'Charging',
    },
    {
      img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540116/accessories_Shop_djcuaq.png" alt='accessories' className='item-img'/>,
      title: 'Vehicle Accessories',
    },
    {
      img: <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" alt='apparel' className='item-img'/>,
      title: 'Apparel',
    },
    {
        img: <img src="https://res.cloudinary.com/droondbdu/image/upload/v1699540187/lifestyle_Shop_fxriqy.png" alt='lifestyle' className='item-img'/>,
        title: 'Lifestyle',
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

  return (
    <>
      <div>
        <span className='right-container'>
          <FontAwesomeIcon icon={faCircleQuestion} className='icon' />
          <FontAwesomeIcon icon={faGlobe} className='icon' />
          <Link to={config.routes.customerhome}>
              <FontAwesomeIcon icon={faCircleUser} className='icon' />
          </Link>
        </span>
        <span className='center-container'>
          <p className='article'>Vehicle</p>
          <p className='article'>Charging</p>
          <p className='article'>Energy</p>
          <p className='article'>Discover</p>
          <p
            className='article'
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
                      <div className='item-container'>
                        {item.img}
                        <p style={{textAlign: 'center'}}>{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </p>
        </span>
      </div>
    </>
  );
}

export default NavBar;
