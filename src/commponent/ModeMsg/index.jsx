import React from 'react'
import { Select } from 'antd';

import { connect } from 'react-redux'
import RequestParams from './RequestParams';
import './index.css'
import { changeRequest } from '../../store/actionCreators';
const ModeMsg = (props) => {
  const newRequestData = props.requestdata
  // 改变请求参数
  const onselectChangerequest = (e) => {
    newRequestData.mode = e
    props.setRequestData(newRequestData)
  }

  return (
    <div className='mode-title'>
      <Select defaultValue={props.requestdata.mode} style={{ color: '#0c0c0c' }}
        onChange={onselectChangerequest}
        options={[
          { value: 0, label: '问答模式' },
          { value: 1, label: '聊天模式' },
        ]}
      />
      <RequestParams />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    requestdata: state.requestdata
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setRequestData: function (ary) {
      dispatch(changeRequest(ary))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeMsg)