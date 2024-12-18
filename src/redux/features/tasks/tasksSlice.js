import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "Pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "Pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      const filteredTasks = state.tasks.filter((item) => item.id !== payload);
      state.tasks = filteredTasks;
    },
    updateStatus: (state, {payload}) => {
      const target = state.tasks.find(item => item.id === payload.id);
      target.status = payload.status;
    }
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
