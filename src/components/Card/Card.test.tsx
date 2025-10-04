import { describe, expect, it,vi } from "vitest";
import { screen, render, userEvent } from "../../../test-utils";
import MyCard from "./Card";
import { CartContext } from "../../CartContext";

describe("Card component", () => {
  it("the product image should be displayed", () => {
    render(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("#");
    expect(image.getAttribute("alt")).toBe("apple");
  });
  it("the price and the product name should be displayed", () => {
    render(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
  it("the add to cart button should be displayed", () => {
    render(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const button = screen.getByText(/add to cart/i);
    expect(button).toBeInTheDocument();
  });
  it("the buttons + and - should be displayed", () => {
    render(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("it should call handleAddToCart when the Add to cart button is clicked", async () => {
    const mockAddToCart=vi.fn()
    const mockUpdateQuantity=vi.fn()
    const mockRemoveFromCart=vi.fn()
    render(
      <CartContext.Provider value={{ cart:[], addToCart:mockAddToCart, updateQuantity:mockUpdateQuantity, removeFromCart:mockRemoveFromCart }}>
        <MyCard id={1} image={"#"} name={"apple"} price={100} />
      </CartContext.Provider>
    );
    const button = screen.getByText(/add to cart/i);
    await userEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledTimes(1)
    expect(mockAddToCart).toHaveBeenCalledWith({
         id: 1,
      name: "apple",
      price: 100,
      quantity: 1,
      image:"#"
    })
  });
});
