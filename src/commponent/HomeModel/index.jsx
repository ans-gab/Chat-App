import React from 'react'
import { Avatar,List } from 'antd'
import { example } from '../../common/local-data'
import './index.css'

const HomeModel = () => {
  return (
    <div
      id="scrollableDiv"
      style={{
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
    <List
    itemLayout="horizontal"
    dataSource={example}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          style={{alignItems:'center'}}
          avatar={<img width={35} src={require('../../assets/homelist/explain.png')} alt={item.title} /> }
          title={<a href={item.imgsrc}>{item.title}</a>}
          description={item.content}
        />
      </List.Item>
    )}
  />
  </div>
  )
}

export default HomeModel