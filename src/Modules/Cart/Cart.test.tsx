import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux } from "../../../test-utils";
import Cart from "./Cart";
import "@testing-library/jest-dom";

const mockCart = [
  { id: 1, image: "#1", name: "apple", price: 100, quantity: 2 },
  { id: 2, image: "#2", name: "orange", price: 150, quantity: 1 },
];

describe("Cart component", () => {
  
  it("it should not be rendered when isOpen is false", () => {
    renderWithRedux(<Cart isOpen={false} />);
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
  it("should render an empty cart when the cart is empty and isOpen is true", () => {
    renderWithRedux(<Cart isOpen={true} />);
    expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
  });
  it("it should render the items in the cart and the total amount", () => {
    renderWithRedux(<Cart isOpen={true} />,{
      preloadedState: {
        cartReducer: { cart: mockCart },
      },
    });
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/orange/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
    expect(screen.getByText(/350/i)).toBeInTheDocument();
  });
});
