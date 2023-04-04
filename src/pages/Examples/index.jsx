import React from 'react'
import { connect } from 'react-redux'
import { Avatar, Button } from 'antd'
import { Ellipsis } from 'antd-mobile'
import './index.css'
const Example = (props) => {
  return (
    <div className='modal-dialog'>
      <div className="details-header">
        <div className="details-header-left">
          <Avatar style={{ borderRadius: 0 }} src={props.example.imgsrc} alt={props.example.title} />
          {props.example.title}
        </div>
        <div className="details-header-right">
          <Button type='primary' href="#/question">尝试一下</Button >
        </div>
      </div>
      <div className="details-description">{props.example.description}</div>
      <div className="example-details-content">
        <div className="prompt-container">
          <div className="body-large bold">请求文本</div>
          <div className="prompt"><Ellipsis direction='end' content={props.example.prompt} expandText='展开' collapseText='收起' /></div>
        </div>
        <div className="sample-response">
          <div className="body-large bold">ChatGPT响应</div>
          <div className="response-text"><Ellipsis direction='end' content={props.example.response} expandText='展开' collapseText='收起' /></div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    example: state.example
  }
}

export default connect(mapStateToProps)(Example)