import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux, userEvent } from "../../../test-utils";
import MyCard from "./Card";
import "@testing-library/jest-dom";
import { addToCart } from "../../store/reducers/CartSlice";
import { setupStore } from "../../store/store";

describe("Card component", () => {
  it("the product image should be displayed", () => {
    renderWithRedux(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("#");
    expect(image.getAttribute("alt")).toBe("apple");
  });
  it("the price and the product name should be displayed", () => {
    renderWithRedux(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
  it("the add to cart button should be displayed", () => {
    renderWithRedux(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const button = screen.getByText(/add to cart/i);
    expect(button).toBeInTheDocument();
  });
  it("the buttons + and - should be displayed", () => {
    renderWithRedux(<MyCard id={1} image={"#"} name={"apple"} price={100} />);
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("it should call handleAddToCart when the Add to cart button is clicked", async () => {
    const store = setupStore({ cartReducer: { cart: [] } });
    const mockDispatch = vi.spyOn(store, "dispatch");
    renderWithRedux(<MyCard id={1} image={"#"} name={"apple"} price={100} />, {
      store,
    });
    const button = screen.getByText(/add to cart/i);
    await userEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(
      addToCart({ id: 1, name: "apple", price: 100, quantity: 1, image: "#" })
    );
  });
});
