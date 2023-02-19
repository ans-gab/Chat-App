import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faQuestionCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './index.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-ul'>
        <NavLink to="/home" className={({ isActive }) =>
          isActive ? 'footer-ul-li active' : 'footer-ul-li'}>
          <FontAwesomeIcon icon={faHome} />
          <span>首页</span>
        </NavLink>
        <NavLink to="/createimg" className='footer-ul-li'>
          <FontAwesomeIcon icon={faBars} />
          <span>生成图片</span>
        </NavLink>
        <NavLink to="/question" className='footer-ul-li'>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span>提问</span>
        </NavLink>
        <NavLink to="/mine" className='footer-ul-li'>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>我的</span>
        </NavLink>
      </ul>
    </div>
  );
}
