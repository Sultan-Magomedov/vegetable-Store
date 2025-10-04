import {describe, it, expect} from "vitest"
import {screen,render} from "../../../test-utils"
import ProductsList from "./ProductsList"

describe("ProductsList component",()=>{
    it("asd",()=>{
        render(<ProductsList/>)
        expect(screen.getByText(/catalog/i)).toBeInTheDocument()
    })
})