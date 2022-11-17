const {expect} = require("chai")
const {chooseYourCar} = require("./chooseYourCar")

describe("Tests", ()=>{
    describe("choosingType", ()=>{
        it("input", ()=>{
            expect(()=>{chooseYourCar.choosingType("Sedan", "red", 1890)}).to.throw("Invalid Year!")
            expect(()=>{chooseYourCar.choosingType("Sedan", "red", 2023)}).to.throw("Invalid Year!")
            expect(()=>{chooseYourCar.choosingType("Fiat", "red", 2022)}).to.throw("This type of car is not what you are looking for.")
            expect(()=>{chooseYourCar.choosingType("Coupe", "red", 2022)}).to.throw("This type of car is not what you are looking for.")
            expect(chooseYourCar.choosingType("Sedan", "red", 2022)).to.equals(`This red Sedan meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equals(`This red Sedan meets the requirements, that you have.`)
            expect(chooseYourCar.choosingType("Sedan", "red", 2000)).to.equals("This Sedan is too old for you, especially with that red color.")
        })
    })
    describe("brandName", ()=>{
        it("input", ()=>{
            expect(()=>{chooseYourCar.brandName("pesho",0)}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.brandName(["pesho"],"false")}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.brandName(["pesho"],22)}).to.throw(`Invalid Information!`)
            expect(chooseYourCar.brandName(["Fiat", "Bmw", "Porshe"], 1)).to.equals("Fiat, Porshe")
            expect(chooseYourCar.brandName(["Fiat", "Bmw"], 1)).to.equals("Fiat")
        })
    })
    describe("CarFuelConsumption", ()=>{
        it("input", ()=>{
            expect(()=>{chooseYourCar.carFuelConsumption(false,2)}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.carFuelConsumption(1,false)}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.carFuelConsumption(-1,2)}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.carFuelConsumption("1","2")}).to.throw(`Invalid Information!`)
            expect(()=>{chooseYourCar.carFuelConsumption(1,-2)}).to.throw(`Invalid Information!`)
            expect(chooseYourCar.carFuelConsumption(100,5)).to.equals(`The car is efficient enough, it burns 5.00 liters/100 km.`)
            expect(chooseYourCar.carFuelConsumption(100,7)).to.equals(`The car is efficient enough, it burns 7.00 liters/100 km.`)
            expect(chooseYourCar.carFuelConsumption(100,2.5)).to.equals(`The car is efficient enough, it burns 2.50 liters/100 km.`)//3.34343
            expect(chooseYourCar.carFuelConsumption(100,3.34343)).to.equals(`The car is efficient enough, it burns 3.34 liters/100 km.`)//3.34343
            expect(chooseYourCar.carFuelConsumption(100,8)).to.equals(`The car burns too much fuel - 8.00 liters!`)
            expect(chooseYourCar.carFuelConsumption(100,7.5)).to.equals(`The car burns too much fuel - 7.50 liters!`)
        })
    })
})