import { SIGN_UP, SIGN_ERROR } from '../constants';
import axios from 'axios';

export default function(login, password, isRememberMe) {

    return function(dispatch) {

        const newUser = {
            login,
            password,
        }
    
        axios.post(`http://localhost:3000/users`, newUser)
            .then(response => response.data)
            .then(data => {
                isRememberMe && localStorage.setItem('contactsbook_currentUserId', data.id);

                dispatch({
                    type: SIGN_UP,
                    payload: data
                });
            })
            .catch(e => {
                dispatch({
                    type: SIGN_ERROR,
                    payload: e
                });
            })
    }

}