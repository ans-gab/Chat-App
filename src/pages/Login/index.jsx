import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import './index.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login-content'>
      <div className="form">
      <div className="title">欢迎来到摇滚熊</div>
      <div className="table">
      <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />}   placeholder="用户名" />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
        <Input size="large" style={{background:'#FFF' }} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码"/>
      </Form.Item>
      <Form.Item>
        <Button block  type="primary" htmlType="submit" className="login-form-button">
          立即登陆
        </Button>
      </Form.Item>
      <Form.Item>
        <Link className="login-form-forgot" to="/sign-up">立即注册</Link>
        <Link className="login-form-forgot" href="">忘记密码?</Link>
      </Form.Item>
    </Form>
      </div>
      </div>
      
    </div>
  )
}

export default Login