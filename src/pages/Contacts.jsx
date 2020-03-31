import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Input } from 'antd';
import { LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';

import signOutAction from '../actions/signOutAction';
import getContactsAction from '../actions/getContactsAction';

import ContactPreview from '../components/ContactPreview';

const { Search } = Input;

const Contacts = () => {

    const [ inputText, setInputText ] = useState('');

    const currentUserId = useSelector(state => state.currentUser.id, shallowEqual);
    const contacts = useSelector(state => state.userContacts.contacts, shallowEqual);
    const dispatch = useDispatch();

    const contactsList = contacts.map((contact, id) => {
        return (
            <Link to="/contact" key={ id }>
                <ContactPreview fullname={ contact.fullname } phone={ contact.phone } searched={ inputText } />
            </Link>
        );
    });

    useEffect(() => {
        dispatch(getContactsAction(currentUserId));
    }, []);

    const handleSignOut = () => dispatch(signOutAction());
    const handleInput = event => setInputText(event.target.value);

    return (
        <div className="contacts">
            <div className="contacts__header">
                <div className="contacts__actions-bar">
                    <Link to="/" className="contacts__exit" onClick={ handleSignOut }>
                        <LogoutOutlined rotate={180} />
                        <span> Sign Out</span>
                    </Link>
                    <div className="contacts__add">
                        <span>Add </span>
                        <PlusCircleOutlined />
                    </div>
                </div>
                <div className="contacts__title">Contacts</div>
            </div>
            <div className="contacts__body">
                <div className="contacts__search-bar">
                    <Search
                        placeholder="input contact's name or phone"
                        onSearch={value => console.log(value)}
                        onInput={ handleInput }
                    />
                </div>
                <div className="contacts__list">{ contactsList }</div>
            </div>
        </div>
    );
}

export default Contacts;