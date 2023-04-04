import React from 'react'
import { List, Avatar } from 'antd'
import { connect } from 'react-redux'
import { example } from '../../common/local-data'
import './index.css'
import { NavLink } from 'react-router-dom'
import { changeExample } from '../../store/actionCreators'

const HomeModel = (props) => {
  return (
    <div id="scrollableDiv" style={{ overflow: 'auto', padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)', }}>
      <List
        itemLayout="horizontal"
        dataSource={example}
        renderItem={(item, index) => (
          <List.Item onClick={() => { props.setExample(item); }}>
            <List.Item.Meta
              style={{ alignItems: 'center' }}
              avatar={<Avatar shape='square' src={item.imgsrc} />}
              title={<NavLink to="/example">{item.title}</NavLink>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    example: state.example
  }
}

const mapDishpatchToProps = dispatch => {
  return {
    setExample: function (ary) {
      dispatch(changeExample(ary))
    }
  }
}


export default connect(mapStateToProps, mapDishpatchToProps)(HomeModel)