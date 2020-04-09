import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import ErrorHandler from '../components/ErrorHandler';

import signInAction from '../actions/signInAction';

const Authorization = () => {

    const dispatch = useDispatch();
    
    const currentUser = useSelector(state => state.currentUser, shallowEqual);

    const onFinish = values => {
        dispatch(signInAction(values.username, values.password, values.remember));
    }

    return (
        <div className="sign__auth">

            { currentUser.error && <ErrorHandler error={ currentUser.error } /> }

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
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Login" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Sign In
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Authorization;