import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'Toast',
  initialState:{
    message: '',
    type:true
  },
  reducers: {
    setToastMessage (state, action)  {   
      state.message = action.payload.message;
      state.type = action.payload.type
    },
    clearToastMessage (state)  {
      state.message = '';
      console.log("clear")
    },
  },
});

export const { setToastMessage, clearToastMessage } = toastSlice.actions;
export default toastSlice.reducer;