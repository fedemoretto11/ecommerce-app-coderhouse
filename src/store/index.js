import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import cartReducer from '../features/cartSlice';
import { shopApi } from "../services/shopService";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../services/authService";
import authReducer from "../features/authSlice";


const store = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
    .concat(shopApi.middleware)
    .concat(authApi.middleware)
});


setupListeners(store.dispatch)

export default store