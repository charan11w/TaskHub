import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "Doctor Appointment",
    completed: true,
  },
  {
    id: 2,
    text: "Meeting at School",
    completed: false,
  },
  {
    id: 3,
    text: "Playing football",
    completed: false,
  },
];

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask(state, action) {
      const text = action.payload.text;
      if (!text.trim()) return;
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      state.push(newTask); 
    },

    deleteTask(state, action) {
      const id = action.payload;
      return state.filter((task) => task.id !== id); 
    },

    toggleCompleted(state, action) {
      const id = action.payload;
      return state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ); 
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = TodoSlice.actions;
export default TodoSlice.reducer;
