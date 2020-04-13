import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

import { Form, Input, Button } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';

import AddEditStatus from '../components/AddEditStatus';

import addContactAction from '../actions/addContactAction';

const AddContact = () => {
    
    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);

    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const currentUserId = useSelector(state => state.currentUser.id, shallowEqual);

    const layout = {
        labelCol: { span: 4, offset: 3 },
        wrapperCol: { span: 14 }
    };

    const onFinish = values => {
        switchAddEditStatus();
        dispatch(addContactAction(currentUserId, values.fullname, values.phone));
        form.setFieldsValue({ fullname: '', phone: '' })
    };

    const switchAddEditStatus = () => {
        setIsFormSubmitted(!isFormSubmitted);
    }

    return (
        <div className="contacts">
            <div className="contacts__header emerald">
                <div className="contacts__actions-bar">
                    <Link to="/contacts" className="contacts__nav-link">
                        <LeftCircleOutlined/>
                        <span> Back</span>
                    </Link>
                </div>
                <div className="contacts__title">Adding</div>
            </div>
            <div className="contacts__body">
                <Form
                    className="contacts__form"
                    layout="vertical"
                    name="nest-messages"
                    onFinish={onFinish}
                    form={form}
                >
                    <Form.Item name="fullname" label="Name" rules={[{ required: true, message: 'Please input fullname' }]}>
                        <Input disabled={ isFormSubmitted } />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input phone number!' }]}
                    >
                        <Input type="phone" style={{ width: '100%' }} disabled={ isFormSubmitted } />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 11 }}>
                        <Button type="primary" htmlType="submit" disabled={ isFormSubmitted }>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
            { isFormSubmitted && <AddEditStatus switchAddEditStatus={ switchAddEditStatus } isAdding /> }
        </div>
    );
}

export default AddContact;