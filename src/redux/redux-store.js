import { configureStore } from '@reduxjs/toolkit';
import { AuthSliceReducers } from './slices/auth-slice';
import { TaskSliceReducer } from './slices/task-slice';

const appReduxStore = configureStore({
  reducer: {
    task: TaskSliceReducer,
    auth: AuthSliceReducers,
  },
});

export default appReduxStore;
