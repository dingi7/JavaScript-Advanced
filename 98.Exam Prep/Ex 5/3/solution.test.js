const { expect } = require("chai");
const { companyAdministration } = require("./companyAdministration");

describe("Tests", () => {
  describe("hiringEmployee Tests ...", () => {
    it("Test inputs", () => {
      expect(() => {
        companyAdministration.hiringEmployee("Pesho", "IT", 3);
      }).to.throw("We are not looking for workers for this position.");
      expect(companyAdministration.hiringEmployee("Pesho", "Programmer", 2)).to.equals("Pesho is not approved for this position.");
      expect(companyAdministration.hiringEmployee("Pesho", "Programmer", 3)).to.equals("Pesho was successfully hired for the position Programmer.");
      expect(companyAdministration.hiringEmployee("Pesho", "Programmer", 42)).to.equals("Pesho was successfully hired for the position Programmer.");
    });
  });
  describe("calculateSalary Test ...", ()=>{
    it("Test inputs", ()=>{
        expect(()=>{companyAdministration.calculateSalary("2")}).to.throw("Invalid hours")
        expect(()=>{companyAdministration.calculateSalary(-2)}).to.throw("Invalid hours")
        expect(companyAdministration.calculateSalary(0)).to.equals(0)
        expect(companyAdministration.calculateSalary(160)).to.equals(2400)
        expect(companyAdministration.calculateSalary(170)).to.equals(3550)
        expect(companyAdministration.calculateSalary(161)).to.equals(3415)
    })
  })
  describe("firedEmployee Tests ..." , ()=>{
    it("Test inputs", ()=>{
        expect(()=>{companyAdministration.firedEmployee("",1)}).to.throw("Invalid input")
        expect(()=>{companyAdministration.firedEmployee(["2","3"],false)}).to.throw("Invalid input")
        expect(()=>{companyAdministration.firedEmployee(["2","3"],1.2)}).to.throw("Invalid input")
        expect(()=>{companyAdministration.firedEmployee(["2","3"],-1)}).to.throw("Invalid input")
        expect(()=>{companyAdministration.firedEmployee(["2","3"],100)}).to.throw("Invalid input")
        expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"],0)).to.equals("Ivan, George")
    })
  })
});
// let input = [Petar", "Ivan", "George"]
