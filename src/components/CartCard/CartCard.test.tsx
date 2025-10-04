import { describe, expect, it } from "vitest";
import { screen, render} from "../../../test-utils";
import CartCard from "./CartCard";
import "@testing-library/jest-dom"

describe("CartCard component", () => {
  it("the product image should be displayed", () => {
    render(
      <CartCard id={1} image={"#"} name={"apple"} price={100} quantity={1} />
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toBe("#");
    expect(image.getAttribute("alt")).toBe("apple");
  });
  it("the price and the product name should be displayed", () => {
    render(
      <CartCard id={1} image={"#"} name={"apple"} price={100} quantity={1} />
    );
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
  });
  it("the buttons + and - should be displayed", () => {
    render(
      <CartCard id={1} image={"#"} name={"apple"} price={100} quantity={1} />
    );
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });
});
