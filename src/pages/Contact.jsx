import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { LeftCircleOutlined, SyncOutlined } from '@ant-design/icons';

import deleteContactAction from '../actions/deleteContactAction';

const Contact = () => {

    const dispatch = useDispatch()

    const { id } = useParams();

    const contacts = useSelector(state => state.userContacts.contacts, shallowEqual);
    const contact = contacts.find(obj => obj.id === Number(id));

    const handleDeleteContact = () => dispatch(deleteContactAction(contact.id));

    return (
        <div className="contacts">
            <div className="contacts__header purple">
                <div className="contacts__actions-bar">
                    <Link to="/contacts" className="contacts__nav-link">
                        <LeftCircleOutlined/>
                        <span> Back</span>
                    </Link>
                    <Link to={ `/edit/${id}` } className="contacts__nav-link">
                        <span>Edit </span>
                        <SyncOutlined />
                    </Link>
                </div>
                <div className="contacts__title">{ contact.fullname }</div>
            </div>
            <div className="contacts__body">
                <div className="contacts__block">
                    <div className="contacts__block-title">phone:</div>
                    <div className="contacts__block-general">{ contact.phone }</div>
                </div>
                <Link className="contacts__delete-contact" to="/contacts" onClick={ handleDeleteContact }>Delete contact</Link>
            </div>
        </div>
    );
}

export default Contact;