function odd(input) {
    for (let i in input) {
        input[i] *= 2
    }
    let newarr = input.reverse()
    
    let result = []
    for (let j in newarr) {
        if (j % 2 === 0) {
            result += newarr[j] + " "
        }
    }
    return result.trim()
}
let log = odd([3, 0, 10, 4, 7, 3])
console.log(log);