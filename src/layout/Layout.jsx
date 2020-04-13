import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import SignPage from '../pages/SignPage';
import Contacts from '../pages/Contacts';
import Contact from '../pages/Contact';
import AddContact from '../pages/AddContact';
import EditContact from '../pages/EditContact';

import '../styles/antd-styles.scss';
import '../styles/styles.scss';

import signedYetAction from '../actions/signedYetAction';

const Layout = () => {

    const dispatch = useDispatch();

    const currentUserId = useSelector(state => state.currentUser.id, shallowEqual);

    if (currentUserId === null && localStorage.getItem('contactsbook_currentUserId')) {
        dispatch(signedYetAction());
    }

    return (
        <div className="app-wrapper">
            <Switch>
                { currentUserId !== null && <Redirect exact from="/" to="/contacts" /> }
                <Route exact path="/" component={ SignPage } />
                <Route exact path="/contacts" component={ Contacts } />
                <Route path="/contacts/:id" component={ Contact } />
                <Route path="/add" component={ AddContact } />
                <Route path="/edit/:id" component={ EditContact } />
            </Switch>
        </div>
    )
}

export default Layout;