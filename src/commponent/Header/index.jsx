import React from 'react'
import { NavBar } from 'antd-mobile'
import './index.css'
const Header = () => {
  const back = () => { window.history.back(); }
  return (
    <NavBar className='header' back='返回' onBack={back}>
      欢迎来到ChatGpt移动端
    </NavBar>
  )
}
export default Header