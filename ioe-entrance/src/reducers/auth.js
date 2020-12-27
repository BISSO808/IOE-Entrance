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
			return {
				...state,
				token: payload.token,
				isAuthenticated: true,
				loading: false,
			};
		case LOGIN_FAILURE:
			return {
				state: undefined,
			};
		default:
			return state;
	}
}
