function Subset(arr){
    let res = []
    let last = 0
    for(num of arr){
        if(num >= last){
            res.push(Number(num))
            last = num
        }
    }
    return res
}
console.log(Subset([2,3,4,2,5,67,222]));