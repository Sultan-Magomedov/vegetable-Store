import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { ProductType } from "../../types";
import ky from "ky";

interface ProductsState {
  products: ProductType[];
  status: "loading" | "resolved" | "rejected" | null;
  error: string | null;
}
export const initialState: ProductsState = {
  products: [],
  status: null,
  error: null,
};
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await ky(
        "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: ProductType[] = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "resolved";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string;
      });
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
