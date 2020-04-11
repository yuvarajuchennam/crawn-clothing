import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const Menuitem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div 
        className={`${size} menu-item`}
        onClick={() => {
            history.push(`${match.url}${linkUrl}`);
            }
        }>
        <div className="background-image"
            style={{
                background:`url(${imageUrl})`
            }}
        ></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
);
export default withRouter(Menuitem)