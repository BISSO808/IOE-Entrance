import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';
import { store } from '../store';
import { setAlert } from './alert';

export async function login(username, password) {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const email = username;
	const body = { email, password };
	try {
		const res = await axios.post('/auth', body, config);
		store.dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
	} catch (err) {
		// console.log(err.response.data.errors);
		const errors = err.response.data.msg;
		console.log(err.response);
		if (errors) {
			errors.forEach((error) => setAlert(error.msg, 'danger'));
			//console.log(errors);
		}
		store.dispatch({
			type: LOGIN_FAILURE,
		});
	}
}
