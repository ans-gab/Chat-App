import React, { useState } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import Reply from '../../commponent/Reply';
import { changeDiologList, changeReply } from '../../store/actionCreators';
import { connect } from 'react-redux'
import './index.css'

const Question = (props) => {

  const [inputValue, setInputValue] = useState('');
  const [btnmsg, setBtnmsg] = useState('发送');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDialogInput = () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newDiologList = [...props.diologlist, {
      text: inputValue,
      type: 'outgoing',
      isreply: 0
    }];
    props.setDialogList(newDiologList);
    setInputValue('');
    setBtnmsg('请求中');
    axios.post('https://api.openai.com/v1/completions', {
      prompt: inputValue, max_tokens: 2048, model: "text-davinci-003", temperature: 0.2
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + props.api }
    }).then(res => {
      console.log('res:', res);
      let text = res.data.choices[0].text.replace("openai:", "").replace("openai：", "").replace(/(^！\n\n)/g, "").replace(/^\n|\n$/g, "")
      console.log('text:', text);
      props.setDialogList([...newDiologList, { text, type: 'ingoing' }])
      setBtnmsg('发送')
    })
  };

  return (
    <div>
      <div className='dialog-list'>
        <Reply />
      </div>
      <div className='input-form'>
        <Input.Group compact className='input-form' >
          <Input placeholder='你可以问我任何问题' disabled={btnmsg === "请求中"} style={{ width: 'calc(100% - 5rem)', color: "#00bcd4" }} type="text" value={inputValue} onChange={handleInputChange} onPressEnter={handleDialogInput} />
          <Button disabled={btnmsg === "请求中"} style={{ width: '5rem' }} onClick={handleDialogInput}>{btnmsg}</Button>
        </Input.Group>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    isreply: state.isreply,
    diologlist: state.diologlist,
    api: state.apikey
  }
}
const mapDishpatchToProps = dispatch => {
  return {
    setReply: function (num) {
      dispatch(changeReply(num))
    },
    setDialogList: function (ary) {
      dispatch(changeDiologList(ary))
    }

  }

}
export default connect(mapStateToProps, mapDishpatchToProps)(Question) 