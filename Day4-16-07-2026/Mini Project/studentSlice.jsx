import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  students: [],
};
const studentSlice = createSlice({
  name: "student",initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});
export const { addStudent, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;