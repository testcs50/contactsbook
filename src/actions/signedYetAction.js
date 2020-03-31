import axios from 'axios';

import { SIGN_IN } from '../constants';

export default function() {

    return function(dispatch) {

        const currentUserId = Number(localStorage.getItem('contactsbook_currentUserId'));

        axios.get(`http://localhost:3000/users/${currentUserId}`)
            .then(response => response.data)
            .then(data => {
                dispatch({
                    type: SIGN_IN,
                    payload: data
                });
            })
            .catch(e => {
                dispatch({
                    type: SIGN_ERROR,
                    payload: e
                });
            });
    }
}