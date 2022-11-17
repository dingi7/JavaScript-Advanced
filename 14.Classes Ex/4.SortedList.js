class List {
    constructor(){
        this.list = []
        this.size = this.list.length
    }
    add(el){
        this.list.push(el)
        this.size = this.list.length
        this.list.sort((a,b) => a-b)
    }
    remove(i){
        if(i > this.size || i < 0){return}
        this.list.splice(i,1)
        this.size = this.list.length
        this.list.sort((a,b) => a-b)
    }
    get(i){
        return this.list[i]
    }
}
let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1); console.log(list.get(1));