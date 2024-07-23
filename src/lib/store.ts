import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  return { store };
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['store']['getState']>;
export type AppDispatch = AppStore['store']['dispatch'];
