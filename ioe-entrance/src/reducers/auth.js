import {
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
} from '../action/types';
const initialState = {
	token: null,
	isAuthenticated: false,
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN_SUCCESS:
		case SIGNUP_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				token: payload.token,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAILURE:
		case SIGNUP_FAILURE:
			localStorage.removeItem('token');
			return {
				state: undefined,
			};
		default:
			return state;
	}
}
