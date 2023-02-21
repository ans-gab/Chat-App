import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select, Row, Col } from 'antd';
import './index.css'
const { Option } = Select
const Register = () => {
  // 手机号头尾数字
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue="86" style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <div className='register-content'>
      <div className="sign-title">欢迎来到摇滚熊</div>
      <div className="sign-table">
      <Form className="login-form">
        <Form.Item name="nickname" rules={[{ required: true, message: '请输入你的昵称!', whitespace: true }]}>
          <Input size='large' prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="昵称" />
        </Form.Item>

        

        <Form.Item  name="password"  rules={[{required: true,message: 'Please input your password!',},]} hasFeedback>
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="密码" />
        </Form.Item>
        <Form.Item name="confirm"  dependencies={['password']} hasFeedback
          rules={[
            {
              required: true,
              message: '请确认您的密码！',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码不匹配'));
              },
            }),
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="确认密码" />
        </Form.Item>
        <Form.Item  name="gender" rules={[{ required: true, message: '请选择性别' }]}>
          <Select placeholder="请选择性别">
            <Option value="1">男</Option>
            <Option value="2">女</Option>
          </Select>
        </Form.Item>
        <Form.Item name="phone" rules={[{ required: true, message: '请输入手机号码!' }]}>
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} placeholder="手机号码" />
        </Form.Item>
        <Form.Item extra="我们必须确保你是个真实的人类">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[{ required: true, message: '请输入验证码' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button >获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button block className="login-form-button" type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
      </div>
      
    </div>
  )
}

export default Register