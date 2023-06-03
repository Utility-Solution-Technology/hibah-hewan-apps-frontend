import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emailOrUsername: '',
  password: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmailOrUsername: (state, action) => {
      state.emailOrUsername = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmailOrUsername, setPassword } = loginSlice.actions;
export default loginSlice.reducer;
