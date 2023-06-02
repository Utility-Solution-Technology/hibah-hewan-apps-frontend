import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  whatsapp: '',
  email: '',
  password: '',
  confirmPass: '',
  matchPass: true,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setWhatsapp: (state, action) => {
      state.whatsapp = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPass: (state, action) => {
      state.confirmPass = action.payload;
    },
    setMatchPass: (state, action) => {
      state.matchPass = action.payload;
    },
  },
});

export const {
  setUsername,
  setWhatsapp,
  setEmail,
  setPassword,
  setConfirmPass,
  setMatchPass,
} = registerSlice.actions;

export default registerSlice.reducer;
