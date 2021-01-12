import axios from 'axios'
import {USER_LOADED, LOAD_ERROR } from './types'
export const loadUser = () => async (dispatch) => {
	try {
		const res = await axios.get('/auth');
console.log(res);
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOAD_ERROR,
		});
	}
};