import { store } from '../store';
import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuid } from 'uuid';
export function setAlert(msg, type, time = 5000) {
	const id = uuid();
	store.dispatch({ type: SET_ALERT, payload: { msg, type, id } });
	setTimeout(() => {
		store.dispatch({ type: REMOVE_ALERT, payload: id });
	}, time);
}
