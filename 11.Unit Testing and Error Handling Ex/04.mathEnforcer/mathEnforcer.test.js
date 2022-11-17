const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer");
// mathEnforcer

// describe("Math tests", () =>{
//     it("Test if addFive Works", ()=>{
//         expect(mathEnforcer.addFive("d")).to.be.undefined
//         expect(mathEnforcer.addFive({})).to.be.undefined
//         expect(mathEnforcer.addFive([])).to.be.undefined
//         expect(mathEnforcer.addFive(false)).to.be.undefined
//         expect(mathEnforcer.addFive(3)).to.equals(8)
//         expect(mathEnforcer.addFive(5)).to.equals(10)
//         expect(mathEnforcer.addFive(-1)).to.equals(4)
//         expect(mathEnforcer.addFive(-6)).to.equals(-1)
//     })

//     it("Test if subtractTen Works", ()=>{
//         expect(mathEnforcer.subtractTen("d")).to.be.undefined
//         expect(mathEnforcer.subtractTen({})).to.be.undefined
//         expect(mathEnforcer.subtractTen([])).to.be.undefined
//         expect(mathEnforcer.subtractTen(false)).to.be.undefined
//         expect(mathEnforcer.subtractTen(3)).to.equals(-7)
//         expect(mathEnforcer.subtractTen(5)).to.equals(-5)
//         expect(mathEnforcer.subtractTen(-1)).to.equals(-11)
//         expect(mathEnforcer.subtractTen(-6)).to.equals(-16)
//         expect(mathEnforcer.subtractTen(25)).to.equals(15)
//     })

//     it("Test if sum Works", ()=>{
//         expect(mathEnforcer.sum("2", 2)).to.be.undefined
//         expect(mathEnforcer.sum(2, "2")).to.be.undefined
//         expect(mathEnforcer.sum({}, "2")).to.be.undefined
//         expect(mathEnforcer.sum({}, 2)).to.be.undefined
//         expect(mathEnforcer.sum([], 1)).to.be.undefined
//         expect(mathEnforcer.sum(false, 2)).to.be.undefined
//         expect(mathEnforcer.sum(1, 2)).to.equals(3)
//         expect(mathEnforcer.sum(-11, 2)).to.equals(-9)
//         expect(mathEnforcer.sum(101, -2)).to.equals(99)
//     })
// })

describe("mathEnforcer", function () {
  describe("addFive", () => {
    it("Should return undefined", () => {
      expect(mathEnforcer.addFive("d")).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive(false)).to.be.undefined;
    });
    it("Should return correct answer", () => {
      expect(mathEnforcer.addFive(3)).to.equals(8);
      expect(mathEnforcer.addFive(5)).to.equals(10);
      expect(mathEnforcer.addFive(-1)).to.equals(4);
      expect(mathEnforcer.addFive(-6)).to.equals(-1);
      expect(mathEnforcer.addFive(5.1)).to.equals(10.1);
    });
  });
  describe("substractTen", () => {
    it("Should return undefined", () => {
      expect(mathEnforcer.subtractTen("d")).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen(false)).to.be.undefined;
    });
    it("Should return correct answer", () => {
      expect(mathEnforcer.subtractTen(3)).to.equals(-7);
      expect(mathEnforcer.subtractTen(5)).to.equals(-5);
      expect(mathEnforcer.subtractTen(-1)).to.equals(-11);
      expect(mathEnforcer.subtractTen(-6)).to.equals(-16);
      expect(mathEnforcer.subtractTen(25)).to.equals(15);
      expect(mathEnforcer.subtractTen(25.3)).to.equals(15.3);
    });
  });

  describe("sum", () => {
    it("Should return undefined", () => {
      expect(mathEnforcer.sum([], 2)).to.be.undefined;
      expect(mathEnforcer.sum("1", 2)).to.be.undefined;
      expect(mathEnforcer.sum(1, "2")).to.be.undefined;
      expect(mathEnforcer.sum({}, 2)).to.be.undefined;
      expect(mathEnforcer.sum(false, 2)).to.be.undefined;
    });
    it("Should return correct answer", () => {
      expect(mathEnforcer.sum(1, 2)).to.equals(3);
      expect(mathEnforcer.sum(100, 350)).to.equals(450);
      expect(mathEnforcer.sum(-10, 10)).to.equals(0);
      expect(mathEnforcer.sum(-20, 10)).to.equals(-10);
      expect(mathEnforcer.sum(-10, -10)).to.equals(-20);
      expect(mathEnforcer.sum(100, 0)).to.equals(100);
      expect(mathEnforcer.sum(205.55, 11.10)).to.equals(216.65);
    });
  });
});
