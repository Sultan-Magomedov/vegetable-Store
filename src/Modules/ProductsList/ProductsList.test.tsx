import {describe, it, expect} from "vitest"
import {screen,renderWithRedux} from "../../../test-utils"
import ProductsList from "./ProductsList"
import "@testing-library/jest-dom"

describe("ProductsList component",()=>{
    it("asd",()=>{
        renderWithRedux(<ProductsList/>)
        expect(screen.getByText(/catalog/i)).toBeInTheDocument()
    })
})