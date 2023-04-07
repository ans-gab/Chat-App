import React, { useRef, useEffect } from 'react'
import { Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { changeReply } from '../../store/actionCreators';
import { connect } from 'react-redux'

const Reply = (props) => {
  const { Paragraph } = Typography;
  const divRef = useRef();
  useEffect(() => {
    const div = divRef.current;
    if (div.scrollHeight > div.clientHeight) {
      div.scrollTop = div.scrollHeight - div.clientHeight;
    }
  })
  return (

    <div className='dialog-list' ref={divRef}>
      {
        props.diologlist.map((item, index) => {
          return (
            <div key={index} className='list-msg'>
              {item.type === 'outgoing'
                ? <div className='outgoing'><div className="outgoing-message">{item.text}</div><div><img src={props.avatarurl} alt="我的头像" /></div></div>
                : <div className='ingoing'>
                  <div><img src={require('../../assets/img/avatar-2.jpg')} alt="机器人头像" /></div>
                  <div className="incoming-message">
                    {item.isloading ?
                      <LoadingOutlined /> :
                      item.text.length <= 30 ?
                        <Paragraph style={{ marginBottom: '0' }}>{item.text}</Paragraph> :
                        <Paragraph style={{ marginBottom: '0' }} copyable={{ text: item.text, tooltips: ['复制', '复制成功'], color: 'white' }}>{item.text}</Paragraph>
                    }
                  </div>
                </div>
              }
            </div>
          )
        })
      }
    </div>
  )
}
const mapStateToProps = state => {
  return {
    diologlist: state.diologlist,
    isreply: state.isreply,
    loading: state.loading,
    avatarurl: state.avatarurl
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setReply: function (num) {
      dispatch(changeReply(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reply)