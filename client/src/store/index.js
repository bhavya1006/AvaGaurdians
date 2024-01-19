import { configureStore } from '@reduxjs/toolkit';
import toastReducer from './slices/toastSlice';
import userReducer from './slices/userSlice';
import probabilityReducer from './slices/probabilitySlice';

const store= configureStore({
    reducer:{
      Toast : toastReducer,
      User : userReducer,
      Probability : probabilityReducer
    }
})

export default store;