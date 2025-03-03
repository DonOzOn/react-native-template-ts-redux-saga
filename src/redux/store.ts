import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appReducer from './app/appSlice';
import networkReducer from './network/networkSlice';
import { persistReducer, persistStore } from "redux-persist";
import rootSaga from './rootSaga';
import { reduxStorage } from './storage';

const sagaMiddleware = createSagaMiddleware();
// Redux Persist Config
const persistConfig = {
  key: "root",
  storage: reduxStorage, // Use MMKV as storage
  whitelist: ["app"], // Only persist 'app' state, add more if needed
};

// Wrap Reducers with Persist
const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for MMKV
      thunk: false,
    }).concat(sagaMiddleware),
  reducer: {
    app: persistedReducer,
    network: networkReducer, // Not persisted
  },
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;