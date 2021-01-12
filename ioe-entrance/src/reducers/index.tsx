import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth'
import alert from './alert';
import question from './question'
import user from './user'
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'auth',
		'question',
		'user'
	],
};

const rootReducer = combineReducers({
	auth, alert, question, user
});

export default persistReducer(persistConfig, rootReducer);