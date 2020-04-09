import { SEARCH_CONTACTS } from '../constants';
import Axios from 'axios';

export default function(userId, substring) {
    return {
        type: SEARCH_CONTACTS,
        payload: Axios.get(`http://localhost:3000/users/${userId}/userContacts?q=${substring}`)
    }
}