import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux, userEvent } from "../../../test-utils";
import Stepper from "./Stepper";

describe("Stepper component", () => {
  it("should be displayed with the correct initial value", () => {
    const mockOnChange = vi.fn();
    renderWithRedux(<Stepper value={2} onChange={mockOnChange} />);
    expect(screen.getByText("2")).toBeInTheDocument();
  });
  it("it should call onChange with an reduced value when the - button is pressed", async () => {
    const mockOnChange = vi.fn();
    renderWithRedux(<Stepper value={2} onChange={mockOnChange} />);
    const decrementButton = screen.getByText("-");
    await userEvent.click(decrementButton);
    expect(mockOnChange).toHaveBeenCalledWith(1);
  });
  
  it("it should call onChange with an increased value when the + button is pressed", async () => {
    const mockOnChange = vi.fn();
    renderWithRedux(<Stepper value={2} onChange={mockOnChange} />);
    const incrementButton = screen.getByText("+");
    await userEvent.click(incrementButton);
    expect(mockOnChange).toHaveBeenCalledWith(3)
  });
});
