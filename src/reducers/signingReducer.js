import { SIGN_UP, SIGN_IN, SIGN_OUT, SIGN_ERROR } from '../constants'

const initialStore = {
    id: null,
    error: null
}

export default function(state = initialStore, action) {
    switch (action.type) {
        case SIGN_UP:
            return { id: action.payload.id, error: null }
        case SIGN_IN:
            return { id: action.payload.id, error: null }
        case SIGN_OUT:
            return { id: null, error: null }
        case SIGN_ERROR:
            return { id: null, error: action.payload }
    }
    return state;
}