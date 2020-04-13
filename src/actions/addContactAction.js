import { ADD_CONTACT } from '../constants';
import Axios from "axios";

export default function(userId, fullname, phone) {
    return {
        type: ADD_CONTACT,
        payload: Axios.post(
            'http://localhost:3000/userContacts',
            { userId, fullname, phone }
        )
    }
}