import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import signUpAction from '../actions/signUpAction';

const Registration = () => {

    const dispatch = useDispatch()

    const onFinish = values => {
        dispatch(signUpAction(values.username, values.password, values.remember))
    };

    return (
        <div className="sign__reg">

            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Login!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="New login" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="New password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registration;