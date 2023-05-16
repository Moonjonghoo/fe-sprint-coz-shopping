import { configureStore, createSlice } from '@reduxjs/toolkit';

let bookmark = createSlice({
  name: 'bookmark',
  initialState: {},
  reducers: {
    changeState(state, action) {
      const { itemId } = action.payload;
      state[itemId] = !state[itemId];
    },
  },
});

export default configureStore({
  reducer: {
    bookmark: bookmark.reducer,
  },
});

export const { changeState } = bookmark.actions;