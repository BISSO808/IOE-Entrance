import { GET_QUESTIONS_SUBJECT, FAIL_QUESTIONS_SUBJECT } from '../action/types';
const initialState = {
	questions: null,
	loading: true,
};

export default function (state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_QUESTIONS_SUBJECT:
			return {
				...state,
				questions: payload,
				loading: false,
			};
		case FAIL_QUESTIONS_SUBJECT:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
}
