import React, { useState } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import './index.css'

const Question = () => {
  const [dialogList, setDialogList] = useState([{
    text: '你好，我是智能聊天机器人，你可以问我任何问题',
    type: 'ingoing'
  }]);
  const [inputValue, setInputValue] = useState('');
  const [btnmsg, setBtnmsg] = useState('发送');
  const [api, setApi] = useState('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')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDialogInput = () => {
    if (inputValue.trim() === '') {
      return;
    }
    const newDialogList = [...dialogList, {
      text: inputValue,
      type: 'outgoing',
    }];
    setDialogList(newDialogList);
    setInputValue('');
    setBtnmsg('请求中');
    axios.post('https://api.openai.com/v1/completions', {
      prompt: inputValue, max_tokens: 2048, model: "text-davinci-003"
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + api }
    }).then(res => {
      console.log('res:', res);
      let text = res.data.choices[0].text.replace("openai:", "").replace("openai：", "").replace(/(^！\n\n)/g, "").replace(/^\n|\n$/g, "")
      console.log('text:', text);
      setDialogList([...newDialogList, { text, type: 'ingoing' }])
      setBtnmsg('发送')
    })
  };

  return (
    <div>
      <div className='dialog-list'>
        {
          dialogList.map((item) => {
            return (
              <div className='list-msg'>
                {item.type === 'outgoing'
                  ? <div className='outgoing'><div className="outgoing-message">{item.text}</div><div><img src={require('../../assets/img/avatar.jpg')} alt="我的头像" /></div></div>
                  : <div className='ingoing'><div><img src={require('../../assets/img/avatar-2.jpg')} alt="我的头像" /></div><div className="incoming-message">{item.text}</div></div>
                }
              </div>
            )
          })
        }
      </div>
      <div className='input-form'>
        <Input.Group compact className='input-form' >
          <Input placeholder='你可以问我任何问题' disabled={btnmsg === "请求中"} style={{ width: 'calc(100% - 5rem)' }} type="text" value={inputValue} onChange={handleInputChange} onPressEnter={handleDialogInput} />
          <Button disabled={btnmsg === "请求中"} style={{ width: '5rem' }} onClick={handleDialogInput}>{btnmsg}</Button>
        </Input.Group>
      </div>
    </div>
  )
}

export default Question