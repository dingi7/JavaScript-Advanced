const { carService } = require("./func")
const { expect, assert } = require("chai")

describe("Tests...", () =>{
    describe("isItExpensive", ()=>{
        it("Epxensive issues", () =>{
            expect(carService.isItExpensive("Engine")).to.equals("The issue with the car is more severe and it will cost more money")
            expect(carService.isItExpensive("Transmission")).to.equals("The issue with the car is more severe and it will cost more money")
        })
        it("Cheap tests", ()=>{
            expect(carService.isItExpensive("Brakes")).to.equals("The overall price will be a bit cheaper")
            expect(carService.isItExpensive("TailLights")).to.equals("The overall price will be a bit cheaper")
        })
    })
    describe("discount", ()=>{
        it("Wrong input", () =>{
            expect(()=> carService.discount("test", 100)).to.throw("Invalid input")
            expect(()=> carService.discount(100, "test")).to.throw("Invalid input")
        })
        it("Cannot apply dis", ()=>{
            expect(carService.discount(2,200)).to.equals("You cannot apply a discount")
            expect(carService.discount(1,200)).to.equals("You cannot apply a discount")
        })
        it("Check for correct answ", ()=>{
            expect(carService.discount(7,2200)).to.equals("Discount applied! You saved 330$")
            expect(carService.discount(5,2200)).to.equals("Discount applied! You saved 330$")
            expect(carService.discount(8,2200)).to.equals("Discount applied! You saved 660$")
            expect(carService.discount(8,2200.5)).to.equals("Discount applied! You saved 660.15$")
            expect(carService.discount(5,2200.5)).to.equals("Discount applied! You saved 330.075$")
        })
    })
    describe("partsToBuy", () =>{
        it("Test for correct input", () =>{
            expect(()=> carService.partsToBuy("test", ["test"])).to.throw("Invalid input")
            expect(()=> carService.partsToBuy([{"test":"test"}], "test")).to.throw("Invalid input")
        })
        it("Test for correct answer", () =>{
            expect(carService.partsToBuy([], ["injector"])).to.equals(0)
            expect(carService.partsToBuy([{part: "injector", price: 230}], [])).to.equals(0)
        })
        it("Test for correct answ with correct input", ()=>{
            expect(carService.partsToBuy([{part: "injector", price: 230}], ['injector'])).to.equals(230)
            expect(carService.partsToBuy([{part: "injector", price: 230},{part: "valve", price: 505.5},{part: "pump", price: 100}], ['injector', 'pump', 'valve'])).to.equals(835.5)
            expect(carService.partsToBuy([{part: "injector", price: 230},{part: "valve", price: 505.5},{part: "pump", price: 100}], ['pump'])).to.equals(100)
        })
    })
})