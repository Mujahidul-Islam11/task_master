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
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      const filteredTasks = state.tasks.filter((item) => item.id !== payload);
      state.tasks.push(filteredTasks);
    },
    updateState: (state, {payload}) => {
      
    }
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
