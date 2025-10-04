import {describe, it, expect} from "vitest"
import {screen,render} from "../../../test-utils"
import ProductsList from "./ProductsList"
import "@testing-library/jest-dom"

describe("ProductsList component",()=>{
    it("asd",()=>{
        render(<ProductsList/>)
        expect(screen.getByText(/catalog/i)).toBeInTheDocument()
    })
})