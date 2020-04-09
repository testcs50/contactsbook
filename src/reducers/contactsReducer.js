import {
    GET_CONTACTS_PENDING,
    GET_CONTACTS_REJECTED,
    GET_CONTACTS_FULFILLED,
    SEARCH_CONTACTS_PENDING,
    SEARCH_CONTACTS_REJECTED,
    SEARCH_CONTACTS_FULFILLED,
    DELETE_CONTACT,
    DELETE_CONTACT_ERROR
} from '../constants'

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
        case SEARCH_CONTACTS_PENDING:
            return {...state, loading: true, error: null};
        case SEARCH_CONTACTS_REJECTED:
            return {...state, loading: false, error: action.payload};
        case SEARCH_CONTACTS_FULFILLED:
            return {...state, loading: false, error: null, contacts: action.payload.data};
        case DELETE_CONTACT:
            return {...state, loading: false, error: null, contacts: state.contacts.filter(contact => contact.id !== action.payload)};
        case DELETE_CONTACTS_REJECTED:
            return {...state, loading: false, error: action.payload};
    }
    return state;
}