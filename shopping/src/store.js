import { configureStore, createSlice } from '@reduxjs/toolkit';

const bookmarkModal = createSlice({
  name: 'bookmarkModal',
  initialState: null,
  reducers: {
    addModal(state, action) {
      // 상태를 true로 설정
      state = true;

      // 1초마다 상태를 천천히 null로 변경
      
    },
    removeModal(state, action) {
      // 상태를 false로 설정
      state = false;

      
    }
  }
});

export const { addModal, removeModal } = bookmarkModal.actions;





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

const bookmarkItem = createSlice({
  name: 'Item',
  initialState:[],
  reducer:{
    removeItem:(state,action)=>{
      return state.filter((item)=>item.id !==action.payload)
    }
  }
})

export const { addToBookmark, removeFromBookmark } = bookmarkSlice.actions;

const store = configureStore({
  reducer: {
    bookmark: bookmarkSlice.reducer,
    bookmarkItem:bookmarkItem.reducer,
    bookmarkModal:bookmarkModal.reducer
  },
});

export default store;

export const {removeItem} =bookmarkItem.actions