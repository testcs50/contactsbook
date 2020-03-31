import { GET_CONTACTS_PENDING, GET_CONTACTS_REJECTED, GET_CONTACTS_FULFILLED } from '../constants'

const initialStore = {
    contacts: [],
    loading: false,
    error: null
};

export default function(state = initialStore, action) {
    switch (action.type) {
        case GET_CONTACTS_PENDING:
            return {...state, loading: true, error: null};
        case GET_CONTACTS_REJECTED:
            return {...state, loading: false, error: action.payload};
        case GET_CONTACTS_FULFILLED:
            return {...state, loading: false, error: null, contacts: action.payload.data};
    }
    return state;
}