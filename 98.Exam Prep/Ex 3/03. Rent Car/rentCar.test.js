const {expect} = require("chai")
const {rentCar} = require("./rentCar")

describe("Tests to do", ()=>{
    describe("Search car tests", ()=>{
        it("Input tests", ()=>{
            expect(()=>{rentCar.searchCar({}, "test")}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar(2, "test")}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar("test", "test")}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar(false, "test")}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar(["Df", "dd"], 2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar(["Df", "dd"], false)}).to.throw("Invalid input!")
            expect(()=>{rentCar.searchCar(["Df", "dd"], [])}).to.throw("Invalid input!")
        })
        it("Test for correct answ", ()=>{
            expect(()=>{rentCar.searchCar(["Vow"], "bmw")}).to.throw("There are no such models in the catalog!")
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],"BMW")).to.equals("There is 1 car of model BMW in the catalog!")
        })
    })
    describe("calculatePrice Tests", ()=>{
        it("Input tests", ()=>{
            expect(()=>{rentCar.calculatePriceOfCar("Bmw", "2")}).to.throw("Invalid input!")
            expect(()=>{rentCar.calculatePriceOfCar("Bmw", false)}).to.throw("Invalid input!")
            expect(()=>{rentCar.calculatePriceOfCar("Bmw", 2.2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.calculatePriceOfCar(2, 2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.calculatePriceOfCar(false, 2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.calculatePriceOfCar([false], 2)}).to.throw("Invalid input!")
        })
        it("Test for correct answ", ()=>{
            expect(()=>{rentCar.calculatePriceOfCar("Audii", 20)}).to.throw("No such model in the catalog!")
            expect(rentCar.calculatePriceOfCar("Audi", 20)).to.equals(`You choose Audi and it will cost $720!`)
        })
    })
    describe("checkBudget Tests", ()=>{
        it("Input tests", ()=>{
            expect(()=>{rentCar.checkBudget(20,20,"2")}).to.throw("Invalid input!")
            expect(()=>{rentCar.checkBudget(20,"20",2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.checkBudget("20",20,2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.checkBudget(20.2,20,2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.checkBudget(20,20.2,2)}).to.throw("Invalid input!")
            expect(()=>{rentCar.checkBudget(20,20,2.2)}).to.throw("Invalid input!")
            //tests
        })
        it("Test for correct answ", ()=>{
            expect(rentCar.checkBudget(200,2,600)).to.equals("You rent a car!")
            expect(rentCar.checkBudget(200,2,400)).to.equals("You rent a car!")
            expect(rentCar.checkBudget(200,2,300)).to.equals("You need a bigger budget!")
        })
    })
})