import React, { useEffect } from 'react'
import { Avatar, List, Card, Form, Footer, Modal, TextArea } from 'antd-mobile'
import { KeyOutline } from 'antd-mobile-icons'
import { setApi } from '../../store/actionCreators'
import store from '../../store'
import cookie from 'react-cookies'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
const Mine = (props) => {
  const navigate = useNavigate()
  const chipsLinkData = [
    {
      text: '使用说明',
      type: 'link',
      url: '/instruction'
    },
    {
      text: '更新日志',
      type: 'link',
      url: '/log'
    },
    {
      text: '反馈',
      type: 'link',
      url: '/suggest'
    }
  ]
  // 跳转链接
  const onChipClick = (item, index) => {
    navigate(item.url)
  }
  // 获取cookie,并设置apikey
  useEffect(() => {
    if (cookie.load('apikey')) {
      props.setApi(cookie.load('apikey'))
    }
  }, [])
  return (
    <div>
      <Card >
        <List>
          <List.Item
            prefix={<Avatar src={props.avatarurl} />}
            description='做最好的自己'
          >
            持续更新中
          </List.Item>
        </List>
        <List header='常用设置'>
          <List.Item prefix={<KeyOutline />} onClick={() => {
            Modal.alert({
              title: '请输入您的api密钥',
              content: <Form>
                <Form.Item label='Apikey' name='username' help='没有请联系客服'>
                  <TextArea placeholder='请输入ApiKey' onChange={(e) => { props.setApi(e) }} defaultValue={props.apikey} rows={5} style={{ border: '1px solid #bbbbbb', padding: '5px' }} />
                </Form.Item>
              </Form>,
              confirmText: '提交',
              // 提交设置cookie
              onConfirm: () => {
                // 先删除，再添加
                cookie.remove('apikey');
                cookie.save('apikey', store.getState().apikey);
              },
            })
          }}>
            设置ApiKey
          </List.Item>
        </List>
      </Card>
      <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
    </div >
  )
}

const mapStateToProps = state => {
  return {
    apikey: state.apikey,
    avatarurl: state.avatarurl
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setApi: function (text) {
      dispatch(setApi(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine)
