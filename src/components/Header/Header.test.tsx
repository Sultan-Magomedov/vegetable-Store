import {describe, expect, it,vi} from "vitest"
import {screen,renderWithRedux, userEvent} from "../../../test-utils"
import Header from "./Header"
import "@testing-library/jest-dom"


describe("Header component", ()=>{
    it("the cart button should be displayed",()=>{
        const mockClick=vi.fn();
        renderWithRedux(<Header onClick={mockClick}/>);
        const button =screen.getByText(/cart/i)
        expect(button).toBeInTheDocument()
    })
    it("onClick is called when the button is clicked",async()=>{
        const mockClick=vi.fn();
        renderWithRedux(<Header onClick={mockClick}/>);
        const button =screen.getByText(/cart/i)
        await userEvent.click(button)
        expect(mockClick).toHaveBeenCalled()
    })
})