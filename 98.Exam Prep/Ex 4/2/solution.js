class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity
        this.books = []
    }
    addBook (bookName, bookAuthor){
        if(this.capacity <= 0){
            throw new Error("Not enough space in the collection.")
        }
        this.capacity -= 1
        this.books.push({bookName, bookAuthor, payed: false})
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook( bookName ){
        let element = this.books.find((el) => el.bookName === bookName)
        if(!element){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if(element.payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        element.payed = true
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let element = this.books.find((el) => el.bookName === bookName)
        if(!element){
            throw new Error(`The book, you're looking for, is not found.`)
        }
        if(!element.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let index = this.books.indexOf(element)
        this.books.splice(index,1)
        return `${bookName} remove from the collection.`
    }
    getStatistics(bookAuthor){
        if(!bookAuthor){
        let sorted = this.books.sort((a,b) => a.bookName - b.bookName)
        let result = [`The book collection has ${this.capacity} empty spots left.`]
        sorted.forEach((element) =>{
            if(element.payed){
                result.push(`${element.bookName} == ${element.bookAuthor} - Has Paid.`)
            }
            else{
                result.push(`${element.bookName} == ${element.bookAuthor} - Not Paid.`)
            }
        })
        return result.join('\n')
    }
    else{
        let result = []
        this.books.forEach((element) =>{
            if(element.bookAuthor === bookAuthor){
                if(element.payed){
                    result.push(`${element.bookName} == ${element.bookAuthor} - Has Paid.`)
                }
                else{
                    result.push(`${element.bookName} == ${element.bookAuthor} - Not Paid.`)
                }
            }
        })
        if(result.length <= 0){
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
        else{
            return result.join('\n')
        }
    }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());




