import { combineReducers } from 'redux';

import signingReducer from './signingReducer';
import contactsReducer from './contactsReducer';

export default combineReducers({
    currentUser: signingReducer,
    userContacts: contactsReducer
});