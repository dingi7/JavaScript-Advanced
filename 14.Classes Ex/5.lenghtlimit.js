class Stringer{
    constructor(str, l){
        this.innerString = str
        this.innerLength = l
    }
    increase(l){
        this.innerLength +=l
    }
    decrease(l){
        if(this.innerLength - l <= 0){
            this.innerLength = 0
        }
        else{
            this.innerLength -= l
        }
    }
    toString(){
        let res = this.innerString
        if(this.innerLength >= res.length){return res}
        // return res.slice(this.innerLength- res.length)
        return res.substring(this.innerLength- res.length, this.innerLength) + "..."
    }
}
let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test