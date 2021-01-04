import axios from 'axios';
import { store } from '../store';
import {
	GET_ALL_QUESTIONS,
	FAIL_QUESTIONS,
	GET_QUESTIONS_SUBJECT,
	FAIL_QUESTIONS_SUBJECT,
} from './types';

export async function getAllQuestions() {}

export async function getQuestionBySubject(props) {
	try {
		const res = await axios.get(`/question/${props}`);
		store.dispatch({
			type: GET_QUESTIONS_SUBJECT,
			payload: res.data,
		});
	} catch (err) {
		store.dispatch({
			type: FAIL_QUESTIONS_SUBJECT,
		});
	}
}
