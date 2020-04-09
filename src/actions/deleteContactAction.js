import Axios from "axios";
import { DELETE_CONTACT, DELETE_CONTACT_ERROR } from "../constants";

export default function(contactId) {

    return function(dispatch) {
        Axios.delete(`http://localhost:3000/userContacts/${contactId}`)
            .then(response => {
                dispatch({
                    type: DELETE_CONTACT,
                    payload: contactId
                });
            })
            .catch( err => {
                dispatch({
                    type: DELETE_CONTACT_ERROR,
                    payload: err
                });
            });
    }
}