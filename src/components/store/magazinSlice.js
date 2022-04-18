import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductService from '../../API/api';

const initialState = {
  items: [],
  searchValue: [],
  stateCard: false,
  stateBtnProduct: null,
  cardItems: [],
  favoriteItems: [],
  loading: true,
  status: null,
  error: null,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await ProductService.postItems();
  return response;
});

const storeItems = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addBtnState(state, action) {
      state.stateBtnProduct = action.payload;
    },

    clickedCard(state, action) {
      state.stateCard = action.payload;
    },

    addInCard(state, action) {
      state.cardItems.push(action.payload);
    },
    addFavoriteItems(state, action) {
      state.favoriteItems.push(action.payload);
    },
    isLoadingItems(state, action) {
      state.loading = action.payload;
    },

    filtFavoriteItems(state, action) {
      const item = state.favoriteItems.filter((el) => el.id !== action.payload);
      state.favoriteItems = item;
    },

    deletedCardItems(state, action) {
      const item = state.cardItems.filter((el) => el.id !== action.payload);
      state.cardItems = item;
    },
    searchProduct(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
      state.loading = false
    },
    [fetchItems.rejected]: (state, action) => {},
  },
});

export const {
  searchProduct,
  clickedCard,
  addInCard,
  deletedCardItems,
  addBtnState,
  addFavoriteItems,
  filtFavoriteItems,
  changeLikeBtnState,
  isLoadingItems,
} = storeItems.actions;
export default storeItems.reducer;
