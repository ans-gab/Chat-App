import React, { useState } from 'react'
import store from '../../store';
import { Input, Button } from 'antd'
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
    setInputValue(event.target.value);
  };
  const handleDialogInput = (event) => {
    if (inputValue.trim() === '') {
      return;
    }
    setInputValue(event.target.value);
    const newDiologList = [...props.diologlist, {
      text: inputValue,
      type: 'outgoing',
      isloading: false
    }, {
      type: 'incoming',
      isloading: true
    }];

    if (props.requestdata.mode == 0) {
      props.setQuestion(inputValue)
      console.log(store.getState().question);
    }
    else {
      props.setQuestion(props.question + '\nQ:' + inputValue)
      console.log(store.getState().question);

    }

    props.setDialogList(newDiologList);
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
      newDiologList.pop();
      props.setDialogList([...newDiologList, { text, type: 'ingoing', isloading: false }])
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
      <ModeMsg />
      <Reply />
      <div className='input-form'>
        <Input.Group compact className='input-form' >
          <Input placeholder='你可以问我任何问题' disabled={btnmsg === "请求中"} style={{ width: 'calc(100% - 5rem)' }} type="text" value={inputValue} onChange={handleInputChange} onPressEnter={handleDialogInput} />
          <Button disabled={btnmsg === "请求中"} style={{ width: '5rem', backgroundColor: "#00adae", color: "#ffffff" }} onClick={handleDialogInput}>{btnmsg}</Button>
        </Input.Group>
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