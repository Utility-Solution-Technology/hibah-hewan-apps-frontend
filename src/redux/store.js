import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './register-slice';
import loginSlice from './login-slice';

const store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
  },
});

export default store;
