import React from 'react'
import { Collapse, Card } from 'antd-mobile'
import { updatalog } from '../../common/updataLog'
import './index.css'
const Log = () => {
  const renderTreeNodes = (data) =>
    data.map((item, index) => {
      return <Collapse.Panel key={index} title={item.title}>
        {item.content}
      </Collapse.Panel>;
    });
  return (
    <div className='instruction-text' >
      <Card title='更新日志' headerStyle={{ border: 'none' }}>
        <Collapse defaultActiveKey={['0']}>
          {
            renderTreeNodes(updatalog)
          }
        </Collapse>
      </Card>
    </div>


  )
}

export default Log
