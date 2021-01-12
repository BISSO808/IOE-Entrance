import {USER_LOADED, LOAD_ERROR} from '../action/types'
const initialState = {
    user: null,
    loading: true
}

export default function (state = initialState, action ) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                user: payload,
                loading : false
            }
        case LOAD_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}