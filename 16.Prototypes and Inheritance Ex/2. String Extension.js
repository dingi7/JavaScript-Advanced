//(
    function solve(){
    String.prototype.ensureStart = function(str){
        if(this.split(0,str.length) !== str){
            return str + this
        }
        return this
    }
    String.prototype.ensureEnd = function(str){
        if(this.split(this.length - str.length) !== str){
            return this + str
        }
        return this
    }
    String.prototype.isEmpty = function(){
        if(this){
            return true
        }
        return false
    }
    String.prototype.truncate = function(n){

    }
}//)()
solve()
let str = 'my string';

str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)