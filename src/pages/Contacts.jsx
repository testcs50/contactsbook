import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { Input } from 'antd';
const { Search } = Input;
import { LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons';

import signOutAction from '../actions/signOutAction';
import getContactsAction from '../actions/getContactsAction';
import searchContactsAction from '../actions/searchContactsAction';

import ContactPreview from '../components/ContactPreview';

const Contacts = () => {

    const [ inputText, setInputText ] = useState(null);

    const currentUserId = useSelector(state => state.currentUser.id, shallowEqual);
    const contacts = useSelector(state => state.userContacts.contacts, shallowEqual);
    const dispatch = useDispatch();

    const contactsList = contacts.sort((a, b) => {
            if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
            if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
            return 0;
        })
        .map(contact => {
            return (
                <ContactPreview
                    key={ contact.id }
                    id={ contact.id }
                    fullname={ contact.fullname }
                    phone={ contact.phone }
                    searched={ inputText }
                />
            );
        });

    const handleSignOut = () => dispatch(signOutAction());
    const handleInput = event => setInputText(event.target.value);

    useEffect(() => {
        dispatch(getContactsAction(currentUserId));
    }, []);

    useEffect(() => {
        inputText !== null && dispatch(searchContactsAction(currentUserId, inputText));
    }, [ inputText ]);

    return (
        <div className="contacts">
            <div className="contacts__header bluesky">
                <div className="contacts__actions-bar">
                    <Link to="/" className="contacts__nav-link" onClick={ handleSignOut }>
                        <LogoutOutlined rotate={180} />
                        <span> Sign Out</span>
                    </Link>
                    <Link to="/add" className="contacts__nav-link">
                        <span>Add </span>
                        <PlusCircleOutlined />
                    </Link>
                </div>
                <div className="contacts__title">Contacts</div>
            </div>
            <div className="contacts__body">
                <div className="contacts__search-bar">
                    <Search
                        placeholder="input contact's name or phone"
                        onSearch={ handleInput }
                        onInput={ handleInput }
                        value={ inputText }
                    />
                </div>
                <div className="contacts__list">
                    { contactsList.length ? contactsList : <div className="no-contacts">No contacts!</div> }
                </div>
            </div>
        </div>
    );
}

export default Contacts;