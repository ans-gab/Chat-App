import React, { useState } from 'react'
import store from '../../store';
import { Input, Button, PullToRefresh, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { DeleteOutline } from 'antd-mobile-icons'
import axios from 'axios'
import Reply from '../../commponent/Reply';
import ModeMsg from '../../commponent/ModeMsg';
import { changeDiologList, changeQuestion, changeReply } from '../../store/actionCreators';
import { connect } from 'react-redux'
import './index.css'

const Question = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [btnmsg, setBtnmsg] = useState('发送');
  const handleInputChange = (event) => {
    setInputValue(event);
  };

  async function doRefresh() {
    await sleep(1000)
    props.setDialogList(defaultDiologList)
    props.setQuestion('')
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
  const handleDialogInput = (event) => {
    if (inputValue.trim() === '') {
      return;
    }
    setInputValue(event);
    // 新增聊天内容
    const newDiologList = [...props.diologlist, {
      text: inputValue,
      type: 'outgoing',
      isloading: false
    }, {
      type: 'incoming',
      isloading: true
    }];
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
    setInputValue('');
    setBtnmsg('请求中');
    axios.post('https://api.openai.com/v1/completions', {
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
      let text = res.data.choices[0].text.replace("openai:", "").replace("openai：", "").replace(/(^！\n\n)/g, "").replace(/^\n|\n$/g, "").replace("A:", "").replace(/(^？\n\n)/g, "")
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
      let text = rej.message;
      newDiologList.pop();
      props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
    })
  };

  return (
    <div>
      <ModeMsg style={{ fontSize: 20 }} />
      <PullToRefresh onRefresh={doRefresh} pullingText={'下拉清空会话'} canReleaseText={'释放立即清空'} refreshingText={'清空中'}>
        <Reply />
      </PullToRefresh>
      <div className='input-form'>
        <DeleteOutline style={{ fontSize: 25, marginRight: 5, marginTop: 5, color: 'rgb(0 173 174)' }} onClick={() => { props.setDialogList(defaultDiologList); props.setQuestion('') }} />
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
    question: state.question
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
    }
  };

}
export default connect(mapStateToProps, mapDishpatchToProps)(Question) 