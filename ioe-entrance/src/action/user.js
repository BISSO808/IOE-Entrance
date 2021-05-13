import axios from 'axios';
import { store } from '../store';
import { USER_LOADED, LOAD_ERROR } from './types';
export const loadUser = () => async (dispatch) => {
	console.log('is it workinf');
	try {
		const res = await axios.get('/auth');
		console.log(res);
		store.dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
		store.dispatch({
			type: LOAD_ERROR,
		});
	}
};
