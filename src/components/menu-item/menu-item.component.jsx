import React from 'react';

import './menu-item.styles.scss';

const Menuitem = ({title, imageUrl, size}) => (
    <div 
        className={`${size} menu-item`}
        >
        <div className="background-image"
            style={{
                background:`url(${imageUrl})`
            }}
        ></div>
        <div className='content'>
            <div className='title'>{title}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
);
export default Menuitem;