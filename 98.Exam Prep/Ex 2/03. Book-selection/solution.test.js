const { expect } = require("chai")
const { bookSelection } = require("./solution")

describe("Tests", ()=>{
    describe("isGenreSuitable Tests", ()=>{
        it("Test genre questions", ()=>{
            expect(bookSelection.isGenreSuitable("Thriller", 10)).to.equals(`Books with Thriller genre are not suitable for kids at 10 age`)
            expect(bookSelection.isGenreSuitable("Horror", 10)).to.equals(`Books with Horror genre are not suitable for kids at 10 age`)
            expect(bookSelection.isGenreSuitable("Thriller", 100)).to.equals(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Horror", 100)).to.equals(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable("Test", 1)).to.equals(`Those books are suitable`)
        })
    })
    describe("isItAffordable Tests....", ()=>{
        it("Test for correct input", ()=>{
            expect(()=> bookSelection.isItAffordable("d",2)).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable(1,"2")).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable(true,2)).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable(1,false)).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable([],2)).to.throw("Invalid input")
            expect(()=> bookSelection.isItAffordable("1","2")).to.throw("Invalid input")
        })
        it("Tests for enough money", ()=>{
            expect(bookSelection.isItAffordable(20,200)).to.equals(`Book bought. You have 180$ left`)
            expect(bookSelection.isItAffordable(20,20)).to.equals(`Book bought. You have 0$ left`)
        })
        it("Tests for less money", ()=>{
            expect(bookSelection.isItAffordable(2000,200)).to.equals(`You don't have enough money`)
            expect(bookSelection.isItAffordable(21,20)).to.equals(`You don't have enough money`)
        })
    })
    describe("suitableTitles Tests", ()=>{
        it("Test for correct input", ()=>{
            expect(()=> bookSelection.suitableTitles(["d"],2)).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles(["d"],false)).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles("d","2)")).to.throw("Invalid input")
            expect(()=> bookSelection.suitableTitles(2,"2")).to.throw("Invalid input")
        })
        it("Test answers", ()=>{
            expect(bookSelection.suitableTitles([{title: "Smile", genre: "Horror"}], "Horror")).to.deep.equal(["Smile"])
            expect(bookSelection.suitableTitles([{title: "Smile", genre: "D"}], "Horror")).to.deep.equal([])
            expect(bookSelection.suitableTitles([{title: "Smile", genre: "Horror"},{title: "Smile2", genre: "Horror"},{title: "Smile3", genre: "Horror"}], "Horror")).to.deep.equal(["Smile", "Smile2", "Smile3"])
        })
        
    })
})

// [{title: "Smile", genre: "Horror"}]