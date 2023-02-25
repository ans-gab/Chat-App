import React from 'react'
import { Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import './index.css'
import { changeMode, changeRequest } from '../../store/actionCreators';
const ModeMsg = (props) => {
  // 改变请求参数
  const setParms = () => {
    console.log('改变了请求参数');
  }
  return (
    <div className='mode-title'>
      <Select defaultValue={props.mode} style={{ width: 100, color: '#0c0c0c' }}
        onChange={(e) => props.setMode(e)}
        options={[
          { value: 0, label: '问答模式' },
          { value: 1, label: '聊天模式' },
        ]}
      />
      <UserOutlined onClick={setParms} style={{ fontSize: 26, color: '#FFFFFF' }} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mode: state.mode,
    requestdata: state.requestdata
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setMode: function (num) {
      dispatch(changeMode(num))
    },
    setRequestData: function (ary) {
      dispatch(changeRequest(ary))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeMsg)