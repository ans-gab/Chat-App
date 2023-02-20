import React, { useState } from 'react'
import { Input } from 'antd';
import { Image } from 'antd';
import axios from 'axios'
import './index.css'

const Createimg = () => {
  const { Search } = Input;
  const [imgdes, setImgDes] = useState('');
  const [imglist, setImglist] = useState([]);
  const [isloading, setLoading] = useState();
  const [api, setApi] = useState('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')
  const handleInputChange = (event) => {
    setImgDes(event.target.value);
  };
  const handleDialogInput = () => {
    if (imgdes.trim() === '') {
      return;
    }
    setLoading(true)
    axios.post('https://api.openai.com/v1/images/generations', {
      prompt: imgdes, n: 9, size: "256x256"
    }, {
      headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + api }
    }).then(res => {
      const newImgList = res.data.data;
      setImglist([...newImgList]);
      setLoading(false);
    })
  };
  return (
    <div>
      <div className='top-bar'>
        <Search disabled={isloading} placeholder="输入图片的描述" enterButton onChange={handleInputChange} onPressEnter={handleDialogInput} loading={isloading} />
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