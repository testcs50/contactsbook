import { EDIT_CONTACT } from '../constants';
import Axios from "axios";

export default function(contactId, userId, fullname, phone) {
    return {
        type: EDIT_CONTACT,
        payload: Axios.put(
            `http://localhost:3000/userContacts/${contactId}`,
            { userId, fullname, phone }
        )
    }
}