import React from 'react'
import { Form, Modal, InputNumber, TreeSelect, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { requestModel } from '../../../common/local-data';
import { connect } from 'react-redux';
import { changeSystem, changeRequest } from '../../../store/actionCreators';
import store from '../../../store';
import './index.css'
const RequestParams = (props) => {

  const [form] = Form.useForm();

  // 设置当前选中参数的对象；
  const currentdata = props.requestdata

  // 设置参数弹窗是否可见
  const [visible, setVisible] = React.useState(false);

  // 是否隐藏AI人设
  const [hidinput, setHidinput] = React.useState(true)
  // 关闭弹窗
  const onClose = () => {
    props.setRequestHeader(currentdata)
    setVisible(false);
  }


  // 弹窗点击确认时，改变状态
  const onSure = () => {
    props.setRequestHeader(currentdata)
    setVisible(false);
  }

  // 遍历模型数据
  const renderRequestData = (data) =>
    data.map((item) => {
      if (item.children) {
        renderRequestData(item.children)
      }
      if (item.title === currentdata.model) {
        currentdata.preurl = item.preurl
      }
    })

  // 选中参数时模型时发生的回调
  const onChangeMode = (e) => {
    currentdata.model = e;
    renderRequestData(requestModel);
    if (e === 'gpt-3.5-turbo') {
      setHidinput(false)
    }
    else {
      setHidinput(true)
    }
  }

  // 改变最大回复字数
  const onChangeMaxToken = (e) => {
    currentdata.max_tokens = e
    props.setRequestHeader(currentdata)
    console.log(props.requestdata.max_tokens);
  }

  // 改变temperature
  const onChangeTemperature = (e) => {
    currentdata.temperature = e
  }

  // 改变top_p
  const onChangeTop = (e) => {
    currentdata.top_p = e
  }

  // 改变frequency_penalty  （重复度惩罚因子）
  const onChangeFrequency = (e) => {
    currentdata.frequency_penalty = e
  }

  // 改变presence_penalty  （控制主题的重复度）
  const onChangePresence = (e) => {
    currentdata.presence_penalty = e
  }

  // 改变AI人设
  const onChangeSystem = (e) => {
    props.setSystem(e.target.value)

  }

  return (
    <div className='setRequestParams'>
      <SettingOutlined onClick={() => { setVisible(true); }} style={{ fontSize: 26, color: '#6e6a6a' }} />
      <Modal forceRender open={visible} onOk={onSure} onCancel={onClose} cancelButtonProps={{ disabled: true }} okText="确认" cancelText="取消">
        <Form form={form}>
          <Form.Item label="选择模型">
            <TreeSelect onSelect={onChangeMode}
              treeData={requestModel} defaultValue={currentdata.model}
            />
          </Form.Item>
          <Form.Item label="AI人设" >
            <Input defaultValue={props.system} onChange={onChangeSystem} disabled={hidinput} />
          </Form.Item>
          <Form.Item label="MaxTokens(最大回复字数)">
            <InputNumber min={50} max={4000} defaultValue={currentdata.max_tokens} onChange={onChangeMaxToken} />
          </Form.Item>
          <Form.Item label="temperature(随机因子)">
            <InputNumber min={0} max={1} defaultValue={currentdata.temperature} onChange={onChangeTemperature} />
          </Form.Item>
          <Form.Item label="top_p(随机因子2)">
            <InputNumber min={0} max={1} defaultValue={currentdata.top_p} onChange={onChangeTop} />
          </Form.Item>
          <Form.Item label="frequency_penalty（重复度惩罚因子）">
            <InputNumber min={-2} max={2} defaultValue={currentdata.frequency_penalty} onChange={onChangeFrequency} />
          </Form.Item>
          <Form.Item label="presence_penalty（控制主题的重复度）">
            <InputNumber min={-2} max={2} defaultValue={currentdata.presence_penalty} onChange={onChangePresence} />
          </Form.Item>
        </Form>
      </Modal>
    </div >

  )
}

const mapStateToProps = state => {
  return {
    requestdata: state.requestdata,
    system: state.system
  }
}
const mapDishpatchToProps = dispatch => {
  return {
    setRequestHeader: function (ary) {
      dispatch(changeRequest(ary))
    },
    setSystem: function (text) {
      dispatch(changeSystem(text))
    }
  };

}
export default connect(mapStateToProps, mapDishpatchToProps)(RequestParams)