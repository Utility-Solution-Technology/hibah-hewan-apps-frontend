import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  errFetchList: false,
  loadOnce: false,
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    setErrFetchList: (state) => {
      state.errFetchList = true;
    },
    setLoadOnce: (state) => {
      state.loadOnce = true;
    },
  },
});

export const { setErrFetchList, setLoadOnce } = uploadSlice.actions;
export default uploadSlice.reducer;
