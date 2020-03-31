import { GET_CONTACTS } from '../constants';
import Axios from 'axios';

export default function(userId) {
    return {
        type: GET_CONTACTS,
        payload: Axios.get(`http://localhost:3000/users/${userId}/userContacts`)
    }
}