import React from 'react'
import { List, Image } from 'antd-mobile'
import { connect } from 'react-redux'
import { example } from '../../common/local-data'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { changeExample } from '../../store/actionCreators'

const HomeModel = (props) => {
  const navigate = useNavigate()
  return (
    <div id="scrollableDiv" style={{ overflow: 'auto', padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)', }}>
      <List header='官网示例列表'>
        {example.map((item, index) => (
          <List.Item
            key={index}
            prefix={<Image src={item.imgsrc} fit='cover' width={40} height={40} />}
            description={item.description}
            onClick={() => { props.setExample(item); navigate('/example') }}
          >
            {item.title}
          </List.Item>
        ))}
      </List>
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