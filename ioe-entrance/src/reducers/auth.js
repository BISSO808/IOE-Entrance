import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../action/types';
const initialState = {
	token: null,
	isAuthenticated: false,
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				token: payload.token,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAILURE:
			localStorage.removeItem('token');
			return {
				state: undefined,
			};
		default:
			return state;
	}
}
