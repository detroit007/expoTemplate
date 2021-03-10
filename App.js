import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import MainStack from './navigation/MainStack';
import AuthSlice from './store/slices/AuthSlice';
import DashboardSlice from './store/slices/DashboardSlice';
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function App() {
  const mainReducer = combineReducers({
    root: AuthSlice,
    dashboard: DashboardSlice
  });
  const store = configureStore({
    reducer: mainReducer,
    middleware: [thunk, logger]
  })
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  );
}
