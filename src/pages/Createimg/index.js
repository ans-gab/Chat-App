import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { Image } from 'antd';
import axios from 'axios'
import './index.css'

const Createimg = () => {
  const { Search } = Input;
  const [imgdes, setImgDes] = useState('');
  const [imglist, setImglist] = useState([]);
  const [isloading, setLoading] = useState();
  const [btnmsg, setBtnmsg] = useState('生成图片');
  const [api, setApi] = useState('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')
  const handleInputChange = (event) => {
    setImgDes(event.target.value);
  };
  const handleDialogInput = () => {
    if (imgdes.trim() === '') {
      return;
    }
    setBtnmsg('请求中')
    setImgDes('')
    setLoading(true)
    axios.post('https://api.openai.com/v1/images/generations', {
      prompt: imgdes, n: 2, size: "256x256"
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + api }
    }).then(res => {
      const newImgList = res.data.data;
      setImglist([...newImgList]);
      setLoading(false);
      setBtnmsg('生成图片')
    })
  };
  return (
    <div>
      <div className='bottom-bar'>
        <div className='input-form'>
          <Input.Group compact className='input-form' >
            <Input placeholder='你可以问我任何问题' disabled={btnmsg === "请求中"} style={{ width: 'calc(100% - 5rem)', color: "#00adae", borderColor: "#00adae" }} type="text" value={imgdes} onChange={handleInputChange} onPressEnter={handleDialogInput} />
            <Button disabled={btnmsg === "请求中"} style={{ width: '5rem', backgroundColor: "#00adae", color: "#ffffff" }} onClick={handleDialogInput}>{btnmsg}</Button>
          </Input.Group>
        </div>
      </div>
      <div className="img-group">

        <Image.PreviewGroup >
          {
            imglist.map((item, i) => {
              return (
                <Image className="img-item" width={128} src={item.url} />
              )
            })
          }
        </Image.PreviewGroup>

      </div>

    </div>
  )
}

export default Createimg