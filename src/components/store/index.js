import { configureStore } from '@reduxjs/toolkit';
import storeItemsReducer from '../store/magazinSlice'

export const store = configureStore({
    reducer: {
        getProduct: storeItemsReducer
    },
  })



