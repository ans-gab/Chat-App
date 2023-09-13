import React, { useState, useEffect } from 'react'
import store from '../../store';
import { Input, Button, PullToRefresh, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { DeleteOutline } from 'antd-mobile-icons'
import axios from 'axios'
import Reply from '../../commponent/Reply';
import ModeMsg from '../../commponent/ModeMsg';
import { changeDiologList, changeQuestion, changeReply, setApi, changeMessage } from '../../store/actionCreators';
import { connect } from 'react-redux'
import cookie from 'react-cookies'
import './index.css'

const Question = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [btnmsg, setBtnmsg] = useState('发送');
  const handleInputChange = (event) => {
    setInputValue(event);
  };
  useEffect(() => {
    if (cookie.load('apikey')) {
      props.setApi(cookie.load('apikey'))
    }
  }, [])
  async function doRefresh() {
    await sleep(1000)
    props.setDialogList(defaultDiologList)
    props.setQuestion('')
    setBtnmsg('发送')
    Toast.show({
      icon: 'success',
      content: '已清空对话信息',
    })
  }

  // 初始化聊天内容
  const defaultDiologList = [
    { text: '你好，很高兴为你服务！', isloading: false, type: 'ingoing' },
    { text: '已请空会话', isloading: false, type: 'ingoing' },
  ]
  // 新增聊天内容
  const newDiologList = [...props.diologlist, {
    text: inputValue,
    type: 'outgoing',
    isloading: false
  }, {
    type: 'incoming',
    isloading: true
  }];
  // 3.5模型以下的网络请求
  const requestmodel3 = () => {
    axios.post(props.funUrl + props.requestdata.preurl, {
      prompt: store.getState().question,
      max_tokens: props.requestdata.max_tokens,
      model: props.requestdata.model,
      temperature: props.requestdata.temperature,
      top_p: props.requestdata.top_p,
      frequency_penalty: props.requestdata.frequency_penalty,
      presence_penalty: props.requestdata.presence_penalty
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + props.api }
    }).then(res => {
      console.log('res:', res);
      let text = res.data.choices[0].text.replace(/openai:|openai：|A:|(^！\n\n)|(^？\n\n)|(\n\n$)|(^\n|\n$)|(^\n\n)/g, "").trim();
      console.log('text:', text);
      props.setQuestion(store.getState().question + '\nA:' + text)
      // 如果是问答模式
      if (props.requestdata.mode === 0) {
        store.getState().diologlist.pop()
        props.setDialogList([...store.getState().diologlist, { text, type: 'ingoing', isloading: false }])
      }
      else {
        newDiologList.pop();
        props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
      }

      setBtnmsg('发送')
    }).catch(rej => {
      console.log(rej);
      let text = rej.message + '\n\n请检查ApiKey是否有误！';
      setBtnmsg('发送');
      newDiologList.pop();
      props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
    })
  }
  // 3.5模型及以上的网络请求
  const requestmodel3_5 = () => {
    axios.post(props.funUrl + props.requestdata.preurl, {
      messages: store.getState().message,
      max_tokens: props.requestdata.max_tokens,
      model: props.requestdata.model,
      temperature: props.requestdata.temperature,
      top_p: props.requestdata.top_p,
      frequency_penalty: props.requestdata.frequency_penalty,
      presence_penalty: props.requestdata.presence_penalty
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + props.api }
    }).then(res => {
      console.log('res:', res);
      let text = res.data.choices[0].message.content.replace(/openai:|openai：|A:|(^！\n\n)|(^？\n\n)|(\n\n$)|(^\n|\n$)|(^\n\n)/g, "").trim();
      console.log('text:', text);
      props.setMessage([...store.getState().message, { role: 'assistant', content: text }])
      // 如果是问答模式
      if (props.requestdata.mode === 0) {
        store.getState().diologlist.pop()
        props.setDialogList([...store.getState().diologlist, { text, type: 'ingoing', isloading: false }])
      }
      else {
        newDiologList.pop();
        props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
      }

      setBtnmsg('发送')
    }).catch(rej => {
      console.log(rej);
      let text = rej.message + '\n请检查ApiKey是否有误！';
      setBtnmsg('发送');
      newDiologList.pop();
      props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
    })
  }

  // 3.0以下设置提问内容
  const handleSetQuestion = () => {
    if (props.requestdata.mode === 0) {
      props.setDialogList([{ text: '你好，很高兴为你服务！', isloading: false, type: 'ingoing' }, {
        text: inputValue,
        type: 'outgoing',
        isloading: false
      }, {
        type: 'incoming',
        isloading: true
      }])
      props.setQuestion(inputValue)
      console.log(store.getState().question);
    }
    else {
      props.setDialogList(newDiologList);
      props.setQuestion(props.question + '\nQ:' + inputValue)
      console.log(store.getState().question);
    }
  }

  // 3.5及以上设置请求体
  const handleSetMessage = () => {
    if (props.requestdata.mode === 0) {
      props.setDialogList([{ text: '你好，很高兴为你服务！', isloading: false, type: 'ingoing' }, {
        text: inputValue,
        type: 'outgoing',
        isloading: false
      }, {
        type: 'incoming',
        isloading: true
      }])
      props.setMessage([{
        role: 'system',
        content: store.getState().system
      },
      {
        role: 'user',
        content: inputValue
      }
      ])
      console.log(store.getState().message);
    }
    else {
      props.setDialogList(newDiologList);
      props.message.shift();
      props.setMessage([{ role: 'system', content: store.getState().system }, ...props.message, { role: 'user', content: inputValue }])
      console.log(store.getState().message);
    }
  }

  const handleDialogInput = (event) => {
    if (inputValue.trim() === '') {
      return;
    }
    setInputValue(event);
    setInputValue('');
    setBtnmsg('请求中');

    if (props.requestdata.model === 'gpt-3.5-turbo') {
      handleSetMessage();
      requestmodel3_5()
    }
    else {
      handleSetQuestion();
      requestmodel3()
    }
  };

  return (
    <div className='chat-content'>
      <ModeMsg style={{ fontSize: 20 }} />
      <PullToRefresh onRefresh={doRefresh} pullingText={'下拉清空会话'} canReleaseText={'释放立即清空'} refreshingText={'清空中'}>
        <Reply />
      </PullToRefresh>
      <div className='input-form'>
        <DeleteOutline style={{ fontSize: 25, marginRight: 5, marginTop: 5, color: 'rgb(0 173 174)' }} onClick={() => { props.setDialogList(defaultDiologList); props.setQuestion(''); setBtnmsg('发送') }} />
        <Input className='requestInput' placeholder='你可以问我任何问题' disabled={btnmsg === "请求中"} style={{ width: 'calc(100% - 7rem)', background: '' }} value={inputValue} onChange={handleInputChange} onEnterPress={handleDialogInput} clearable />
        <Button disabled={btnmsg === "请求中"} style={{ width: '5rem', backgroundColor: "#00adae", color: "#ffffff" }} onClick={handleDialogInput}>{btnmsg}</Button>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isreply: state.isreply,
    diologlist: state.diologlist,
    api: state.apikey,
    requestdata: state.requestdata,
    question: state.question,
    funUrl: state.funUrl,
    message: state.message
  }
}
const mapDishpatchToProps = dispatch => {
  return {
    setReply: function (num) {
      dispatch(changeReply(num))
    },
    setDialogList: function (ary) {
      dispatch(changeDiologList(ary))
    },
    setQuestion: function (text) {
      dispatch(changeQuestion(text))
    },
    setApi: function (text) {
      dispatch(setApi(text))
    },
    setMessage: function (ary) {
      dispatch(changeMessage(ary))
    }
  };

}
export default connect(mapStateToProps, mapDishpatchToProps)(Question) 