import { configureStore, createSlice } from '@reduxjs/toolkit';

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState: [],
  reducers: {
    addToBookmark: (state, action) => {
      state.push(action.payload);
    },
    removeFromBookmark: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
  },
});

export default store;