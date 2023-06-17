import { configureStore } from '@reduxjs/toolkit';
import registerSlice from './register-slice';
import loginSlice from './login-slice';
import uploadSlice from './upload-slice';

const store = configureStore({
  reducer: {
    register: registerSlice,
    login: loginSlice,
    upload: uploadSlice,
  },
});

export default store;
