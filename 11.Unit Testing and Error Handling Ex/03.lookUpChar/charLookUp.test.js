const { expect } = require("chai")
const { lookupChar } = require("./charLookUp")

describe("Test", () =>{
    it('should takes valid inputs', () => {
        expect(typeof '',).to.equals('string');
        expect(typeof 3).to.equals('number');
    });
    it("Test if correct type 1", () => {
        let input1 = "2"
        let input2 = "3"
        let result = lookupChar(input1,input2)
        expect(result).to.be.undefined
        expect(lookupChar(['d'], 2)).to.be.undefined;
        expect(lookupChar({}, 'string')).to.be.undefined;
        expect(lookupChar('', 4.4)).to.be.undefined;
    })
    it("Test if correct type 2", () => {
        let input1 = 2
        let input2 = 1
        let result = lookupChar(input1,input2)
        expect(result).to.be.undefined
    })
    it("Check if correct index", ()=>{
        let input1 = "123456"
        let input2 = -9
        let result = lookupChar(input1,input2)
        expect(result).to.be.equal("Incorrect index")
        expect(lookupChar('equals', 6)).to.equal('Incorrect index');
    })
    it("Check if correct char", ()=>{
        expect(lookupChar('string', 0)).to.equal('s');
        expect(lookupChar('string', 1)).to.equal('t');
        expect(lookupChar('string', 2)).to.equal('r');
        expect(lookupChar('string', 3)).to.equal('i');
        expect(lookupChar('string', 4)).to.equal('n');
        expect(lookupChar('string', 5)).to.equal('g');
    })
})