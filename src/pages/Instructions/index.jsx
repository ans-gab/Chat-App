import React from 'react'
import { Collapse, Card } from 'antd-mobile'
import { requestModel, requestParamsInfo } from '../../common/local-data'
import './index.css'
const Instructions = () => {
  const renderTreeNodes = (data) =>
    data.map((item) => {
      if (item.children) {
        return (
          renderTreeNodes(item.children)
        );
      }
      return <Collapse.Panel key={item.title} title={item.title}>
        {item.description}
      </Collapse.Panel>;
    });
  return (
    <div className='instruction-text' >
      <Card title='模型说明' headerStyle={{ border: 'none' }}>
        <Collapse defaultActiveKey={['text-davinci-003']}>
          {
            renderTreeNodes(requestModel)
          }
        </Collapse>
      </Card>
      <Card title='参数说明' headerStyle={{ border: 'none' }}>
        <Collapse defaultActiveKey={['MaxTokens']}>
          {
            renderTreeNodes(requestParamsInfo)
          }
        </Collapse>
      </Card>
    </div>


  )
}

export default Instructions
