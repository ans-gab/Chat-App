import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.css'
const Login = () => {
  return (
    <div className='login-content'>
      <div className="form">
      <div className="title">Welcome</div>
      <div className="table">
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
      <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
        <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password"/>
      </Form.Item>
      <Form.Item>
        <Button block  type="primary" htmlType="submit" className="login-form-button">
          立即登陆
        </Button>
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
         立即注册|
        </a>
        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      
    </Form>
      </div>
      </div>
      
    </div>
  )
}

export default Login