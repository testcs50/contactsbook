import {
    GET_CONTACTS_PENDING,
    GET_CONTACTS_REJECTED,
    GET_CONTACTS_FULFILLED,
    SEARCH_CONTACTS_PENDING,
    SEARCH_CONTACTS_REJECTED,
    SEARCH_CONTACTS_FULFILLED,
    DELETE_CONTACT,
    DELETE_CONTACT_ERROR,
    ADD_CONTACT_PENDING,
    ADD_CONTACT_REJECTED,
    ADD_CONTACT_FULFILLED,
    EDIT_CONTACT_PENDING,
    EDIT_CONTACT_REJECTED,
    EDIT_CONTACT_FULFILLED
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
        case DELETE_CONTACT_ERROR:
            return {...state, loading: false, error: action.payload};
        case ADD_CONTACT_PENDING:
            return {...state, loading: true, error: null};
        case ADD_CONTACT_REJECTED:
            return {...state, loading: false, error: action.payload};
        case ADD_CONTACT_FULFILLED:
            return {...state, loading: false, error: null};
        case EDIT_CONTACT_PENDING:
            return {...state, loading: true, error: null};
        case EDIT_CONTACT_REJECTED:
            return {...state, loading: false, error: action.payload};
        case EDIT_CONTACT_FULFILLED:
            return {
                ...state,
                loading: false,
                error: null,
                contacts: state.contacts.map(item => {
                    console.log(action.payload);
                    if (item.id === action.payload.data.id) return action.payload.data;
                    return item;
                })
            };
    }
    return state;
}