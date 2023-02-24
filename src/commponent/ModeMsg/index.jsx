import React from 'react'
import { Select } from 'antd';
import { connect } from 'react-redux'
import './index.css'
import { changeMode } from '../../store/actionCreators';
const ModeMsg = (props) => {
  return (
    <div className='mode-title'>
      <Select defaultValue={props.mode} style={{ width: 100, color: '#0c0c0c' }}
        onChange={(e) => props.setMode(e)}
        options={[
          { value: 0, label: '问答模式' },
          { value: 1, label: '聊天模式' },
        ]}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    mode: state.mode
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setMode: function (num) {
      dispatch(changeMode(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModeMsg)