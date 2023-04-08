import React from 'react'
import { Card, Image } from 'antd-mobile'
const Suggest = () => {
  return (
    <div className='instruction-text'>
      <Card title='反馈意见'>
        <Image src={require('../../assets/img/weixin.jpg')} />
      </Card>
      <Card title='打赏' >
        <Image src={require('../../assets/img/money.jpg')} />
      </Card>
    </div>
  )
}

export default Suggest