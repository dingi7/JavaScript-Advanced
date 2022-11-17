class Hex{
    constructor(val){
        this.val = val
    }
    valueOf(){
        return this.val
    }
    toString(){
        return "0x" + this.val.toString(16).toUpperCase();
    }
    plus(num){
        return new  Hex(this.val + num)
    }
    minus(num){
        return new  Hex(this.val - num)
    }
    parse(str){
        return parseInt(str,16)
    }
}

let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));