import { SIGN_OUT } from '../constants';

export default function() {

    localStorage.removeItem('contactsbook_currentUserId');

    return {
        type: SIGN_OUT
    }
}