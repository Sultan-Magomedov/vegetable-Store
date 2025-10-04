import { describe, expect, it, vi } from "vitest";
import { screen, render } from "../../../test-utils";
import { CartContext } from "../../CartContext";
import Cart from "./Cart";
import "@testing-library/jest-dom"

describe("Cart component", () => {
  const mockAddToCart = vi.fn();
  const mockUpdateQuantity = vi.fn();
  const mockRemoveFromCart = vi.fn();
  const mockCart = [
    { id: 1, image: "#1", name: "apple", price: 100, quantity: 2 },
    { id: 2, image: "#2", name: "orange", price: 150, quantity: 1 },
  ];
  it("it should not be rendered when isOpen is false", () => {
    render(
      <CartContext.Provider
        value={{
          cart: mockCart,
          addToCart: mockAddToCart,
          updateQuantity: mockUpdateQuantity,
          removeFromCart: mockRemoveFromCart,
        }}
      >
        <Cart isOpen={false} />
      </CartContext.Provider>
    );
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
  it("should render an empty cart when the cart is empty and isOpen is true", () => {
    render(
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: mockAddToCart,
          updateQuantity: mockUpdateQuantity,
          removeFromCart: mockRemoveFromCart,
        }}
      >
        <Cart isOpen={true} />
      </CartContext.Provider>
    );
    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });
  it("it should render the items in the cart and the total amount", () => {
    render(
      <CartContext.Provider
        value={{
          cart: mockCart,
          addToCart: mockAddToCart,
          updateQuantity: mockUpdateQuantity,
          removeFromCart: mockRemoveFromCart,
        }}
      >
        <Cart isOpen={true} />
      </CartContext.Provider>
    );
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/orange/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByText(/350/i)).toBeInTheDocument();
  });
});
