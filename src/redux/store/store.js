import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../reducers/productsSlice';
import vagetablesReducer from '../reducers/vagetablesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    vagetables: vagetablesReducer,
  },
});

export default store;
