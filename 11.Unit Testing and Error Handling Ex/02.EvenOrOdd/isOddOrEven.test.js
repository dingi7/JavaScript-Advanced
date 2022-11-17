const { exprect, expect } = require("chai")

describe("Testing", ()=>{
    it("Test if the input is correct", () =>{
        let input = 2
        let result = isOddOrEven(input)
        expect(result).to.be.equal(undefined)
    })
    it("Test if correct result", ()=>{
        let input = "2222"
        let result = isOddOrEven(input)
        expect(result).to.be.equal("even")
    })
    it("Test if correct result", ()=>{
        let input = "222"
        let result = isOddOrEven(input)
        expect(result).to.be.equal("odd")
    })
})