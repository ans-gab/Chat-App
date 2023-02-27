import React from 'react'
import { Form, Input, Modal, Select, InputNumber, TreeSelect, } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { requestModel } from '../../../common/local-data';
import { connect } from 'react-redux';
import { changeRequest } from '../../../store/actionCreators';
import './index.css'
const RequestParams = (props) => {
  const [form] = Form.useForm();

  // 设置当前选中参数的对象；
  const currentdata = props.requestdata

  // 设置参数弹窗是否可见
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (visible) {
      form.setFieldsValue({ user: "antd" });
    }
  }, [visible]);

  // 关闭弹窗
  const onClose = () => {
    setVisible(false);
  }

  // 选中参数时模型时发生的回调
  const onChangeMode = (e) => {
    currentdata.model = e
  }

  // 改变最大回复字数
  const onChangeMaxToken = (e) => {
    currentdata.max_tokens = e
  }


  return (
    <div className='setRequestParams'>
      <SettingOutlined onClick={() => { setVisible(true); }} style={{ fontSize: 26, color: '#FFFFFF' }} />
      <Modal forceRender open={visible} onOk={onClose} onCancel={onClose}>
        <Form form={form}>
          <Form.Item label="选择模型">
            <TreeSelect onSelect={onChangeMode}
              treeData={requestModel} defaultValue={currentdata.model}
            />
          </Form.Item>
          <Form.Item label="设置最大回复字数">
            <InputNumber min={50} max={4000} defaultValue={currentdata.max_tokens} onChange={onChangeMaxToken} />
          </Form.Item>

        </Form>
      </Modal>
    </div>

  )
}

const mapStateToProps = state => {
  return {
    requestdata: state.requestdata
  }
}
const mapDishpatchToProps = dispatch => {
  return {
    setRequestHeader: function (ary) {
      dispatch(changeRequest(ary))
    }
  };

}
export default connect(mapStateToProps, mapDishpatchToProps)(RequestParams)