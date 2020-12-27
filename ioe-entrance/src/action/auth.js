import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { store } from '../store';

export async function login(username, password) {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const email = username;
	const body = { email, password };
	console.log(body);
	try {
		const res = await axios.post('/auth', body, config);
		store.dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		const errors = err.response.data.errors;
		if (errors) {
			// errors.forEach((error) => dispatch(setAlert(error.msg, 'error')));
			console.log(errors);
		}
		store.dispatch({
			type: LOGIN_FAILURE,
		});
	}
}
