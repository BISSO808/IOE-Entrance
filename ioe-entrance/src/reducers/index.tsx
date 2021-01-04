import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth'
import alert from './alert';
import question from './question'
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'auth',
		'question'
	],
};

const rootReducer = combineReducers({
	auth, alert, question
});

export default persistReducer(persistConfig, rootReducer);