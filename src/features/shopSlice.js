import { createSlice } from "@reduxjs/toolkit";

import categories_data from '../data/categories-data.json';
import products_data from '../data/products-data.json';

export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    categorySelected: '',
    productIdSelected: null,
    categories: categories_data,
    products: products_data,
    productsFilteredByCategory: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload
      state.productsFilteredByCategory = state.products.filter(product => product.category == state.categorySelected)
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload
    } 
  }
});

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions;

export default shopSlice.reducer;