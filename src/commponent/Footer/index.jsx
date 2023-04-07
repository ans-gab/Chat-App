import React from 'react';
import { TabBar } from 'antd-mobile'
import {
  useNavigate, useLocation
} from 'react-router-dom'
import { MessageOutline, AppOutline, PictureOutline, UserOutline } from 'antd-mobile-icons'
import './index.css'
export const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    navigate(value)
  }
  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/createimg',
      title: '绘图',
      icon: <PictureOutline />,
    },
    {
      key: '/question',
      title: '提问',
      icon: <MessageOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className='footer'>

      <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>

    </div>
  );
}
