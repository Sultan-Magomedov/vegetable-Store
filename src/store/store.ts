import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartSlice";
import productsReducer from "./reducers/ProductsSlice";

const rootReducer = combineReducers({
  cartReducer,
  productsReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
