import { describe, expect, it } from "vitest";
import productsReducer, { fetchProducts, initialState } from "../ProductsSlice";

const mockProducts = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image: "http://example.com/laptop.jpg",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 75,
    image: "http://example.com/keyboard.jpg",
  },
];

describe("productsSlice reducer", () => {
  it("should return the initial state", () => {
    expect(productsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle fetchProducts.pending", () => {
    const action = {
      type: fetchProducts.pending.type,
      payload: "test",
    };
    const state = productsReducer(initialState,action);
    expect(state.status).toBe("loading");
    expect(state.error).toBeNull();
    expect(state.products).toEqual([]);
  });

  it("should handle fetchProducts.fulfilled", () => {
    const action = {
      type: fetchProducts.fulfilled.type,
      payload: mockProducts,
    };
    const state = productsReducer(
      { ...initialState, status: "loading", products: [] },
      action
    );
    expect(state.status).toBe("resolved");
    expect(state.products).toEqual(mockProducts);
    expect(state.error).toBeNull();
  });

  it("should handle fetchProducts.rejected", () => {
    const action = {
      type: fetchProducts.rejected.type,
      payload: "error",
    };
    const state = productsReducer(
      {
        ...initialState,
        status: "loading",
        error: null,
      },
      action
    );

    expect(state.status).toBe("rejected");
    expect(state.error).toBe("error");
    expect(state.products).toEqual([]);
  });
});
