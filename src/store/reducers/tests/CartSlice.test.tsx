import { describe, expect, it } from "vitest";
import cartReducer, {
  initialState,
  addToCart,
  updateQuantity,
  removeFromCart,
} from "../CartSlice";

const product = {
  id: 1,
  name: "Orange",
  price: 100,
  quantity: 1,
  image: "#",
};

describe("initial state", () => {
  it("should be initialState", () => {
    const state = cartReducer(undefined, { type: "unknown" });
    expect(state).toEqual(initialState);
  });
});

describe("addToCart", () => {
  it("adds a product to the cart", () => {
    const state = cartReducer(initialState, addToCart(product));
    expect(initialState.cart.length).toBe(0);
    expect(state.cart.length).toBe(1);
  });

  it("when adding one product again, it should increase the quantity", () => {
    const state = cartReducer(initialState, addToCart(product));
    const secondState = cartReducer(state, addToCart(product));
    expect(initialState.cart.length).toBe(0);
    expect(secondState.cart.length).toBe(1);
    expect(state.cart[0].quantity).toBe(1);
    expect(secondState.cart[0].quantity).toBe(2);
  });
});
describe("updateQuantity", () => {
  it("the quantity should increase", () => {
    const addToCartState = cartReducer(initialState, addToCart(product));
    const updateQuantityState = cartReducer(
      addToCartState,
      updateQuantity({ id: 1, quantity: 2 })
    );
    expect(updateQuantityState.cart[0].quantity).toBe(2);
  });
  it("deletes a product when quantity <= 0", () => {
    const addToCartState = cartReducer(initialState, addToCart(product));
    const updateQuantityState = cartReducer(
      addToCartState,
      updateQuantity({ id: 1, quantity: 0 })
    );
    expect(updateQuantityState.cart.length).toBe(0);
  });
});
describe("removeFromCart", () => {
  it("deletes a product by id", () => {
    const addToCartState = cartReducer(initialState, addToCart(product));
    const removeFromCartState = cartReducer(addToCartState, removeFromCart(1));
    expect(addToCartState.cart.length).toBe(1);
    expect(removeFromCartState.cart.length).toBe(0);
  });
});
