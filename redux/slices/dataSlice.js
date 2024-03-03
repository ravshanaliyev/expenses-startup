import { createSlice } from "@reduxjs/toolkit";
import { expenses } from "@/lib/data";

const dataSlice = createSlice({
  name: "expenses",
  initialState: {
    data: expenses,
  },
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    addData: (state, action) => {
      console.log(action.payload);
      console.log(state);
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },
  },
});

export const { setData, addData } = dataSlice.actions;
export default dataSlice.reducer;
