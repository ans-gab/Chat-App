import React from 'react';
import { NavLink } from 'react-router-dom';
import { CommentOutlined, HomeOutlined, AreaChartOutlined, UserOutlined } from '@ant-design/icons'
import './index.css'
export const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-ul'>
        <NavLink to="/home" className={({ isActive }) =>
          isActive ? 'footer-ul-li active' : 'footer-ul-li'}>
          <HomeOutlined style={{ fontSize: 26 }} />
          <span>首页</span>
        </NavLink>
        <NavLink to="/createimg" className='footer-ul-li'>
          <AreaChartOutlined style={{ fontSize: 26 }} />
          <span>绘图</span>
        </NavLink>
        <NavLink to="/question" className='footer-ul-li'>
          {/* <FontAwesomeIcon icon={faQuestionCircle} /> */}
          <CommentOutlined style={{ fontSize: 26 }} />
          <span>提问</span>
        </NavLink>
        <NavLink to="/mine" className='footer-ul-li'>
          <UserOutlined style={{ fontSize: 26 }} />
          <span>我的</span>
        </NavLink>
      </ul>
    </div>
  );
}
