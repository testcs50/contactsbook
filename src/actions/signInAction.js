import { SIGN_IN, SIGN_ERROR } from '../constants';
import axios from 'axios';

export default function(login, password, isRememberMe) {

    //Вот какова особенность использования redux-thunk:
    //В dispatch(), который вызывается в react-компоненте
    //нужно передать функцию, которая возвращает другую
    //функцию, принимающую в качестве параметра dispatch,
    //который потом в ней и вызывается

    return function (dispatch) {
        axios.get(`http://localhost:3000/users?login=${login}&password=${password}`)
            .then(response => response.data)
            .then(data => {
                if (isRememberMe && data.length) {
                    localStorage.setItem('contactsbook_currentUserId', data[0].id);
                }

                if (data.length) {
                    dispatch({
                        type: SIGN_IN,
                        payload: data[0]
                    });
                }
                else {
                    dispatch({
                        type: SIGN_ERROR,
                        payload: 'Invalid login and/or password'
                    });
                }
            })
            .catch(e => {
                dispatch({
                    type: SIGN_ERROR,
                    payload: e
                });
            });
    }
}