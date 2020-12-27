import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth'
import alert from './alert';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [
		'auth',
		'alert'
	],
};

const rootReducer = combineReducers({
	auth, alert
});

export default persistReducer(persistConfig, rootReducer);