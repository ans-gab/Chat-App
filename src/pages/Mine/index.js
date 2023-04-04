import React from 'react'
import { NavBar, Toast } from 'antd-mobile'
const Mine = () => {
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })

  return (

    <NavBar back='返回' onBack={back}>
      标题
    </NavBar>
  )
}

export default Mine