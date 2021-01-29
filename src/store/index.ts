import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import zipCodesReducer from './reducers/zipCodesReducer';
import zipCodeFormReducer from './reducers/zipCodeFormReducer';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  zipCodes: zipCodesReducer,
  zipCodeForm: zipCodeFormReducer,
  weather: weatherReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
  },
  rootReducer,
);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
