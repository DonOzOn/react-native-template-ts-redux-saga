import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import appReducer from './app/appSlice';
import authReducer from './auth/authSlice';
import networkReducer from './network/networkSlice';
import rootSaga from './rootSaga';
import { reduxStorage } from './storage';

const sagaMiddleware = createSagaMiddleware();


// Combine all reducers
const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  network: networkReducer, // Not persisted
});// Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: reduxStorage, // Use MMKV as storage
  whitelist: ['app', 'auth'], // Only persist 'app' state, add more if needed
};

// Wrap Reducers with Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for MMKV
      thunk: false,
    }).concat(sagaMiddleware),
  reducer: persistedReducer,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
