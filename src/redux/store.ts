import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import coursesReducer from './coursesSlice';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
  middleware: [thunk],
}

const rootReducer = combineReducers({
  token: tokenReducer,
  courses: coursesReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;