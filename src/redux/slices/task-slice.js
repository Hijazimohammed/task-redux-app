import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filteredTask: [],
};

const TaskSlice = createSlice({
  name: 'task-slice',
  initialState,
  reducers: {
    refreshTasks(state, action) {
      state.tasks = action.payload;
      state.filteredTask = action.payload;
    },
    addNewTask(state, action) {
      state.tasks = [action.payload, ...state.tasks];
      state.filteredTask = [action.payload, ...state.tasks];
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
      state.filteredTask = state.filteredTask.filter(
        (task) => task.id != action.payload
      );
    },
    updateTask(state, action) {
      let task = state.tasks.find((task) => task.id === action.payload.id);
      task.status = action.payload.status;
      task = { ...task };
      let taskd = state.filteredTask.find(
        (task) => task.id === action.payload.id
      );
      taskd.status = action.payload.status;
      taskd = { ...taskd };
    },
    filterStatus(state, action) {
      if (action.payload == 'all') {
        state.filteredTask = state.tasks;
      } else {
        state.filteredTask = state.tasks.filter(
          (task) => task.status == action.payload
        );
      }
    },
  },
});

export const TaskSliceActions = TaskSlice.actions;

export const TaskSliceReducer = TaskSlice.reducer;
