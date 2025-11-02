import { describe, expect, it, vi } from "vitest";
import { screen, renderWithRedux, userEvent } from "../../../test-utils";
import CardStepper from "./CardStepper";


describe("CardStepper component", () => {
  it("if the value decreases below 1, onChange should be called with the parameter 1", async () => {
    const mockOnChange = vi.fn();
    renderWithRedux(<CardStepper value={1} onChange={mockOnChange} />);
    const decrementButton = screen.getByText("-");
    await userEvent.click(decrementButton);
    expect(mockOnChange).toHaveBeenCalledWith(1)
  });
});
