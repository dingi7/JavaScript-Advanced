function matrix(arr){
    let newarr = [].concat.apply([], arr);
    newarr.sort((a,b) => b - a)
    return newarr[0]
}
let idk = matrix([[20, 50, 10],[8, 33, 145]])
console.log(idk);