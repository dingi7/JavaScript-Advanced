function solve(array){
    let result = {}
    for(arr of array){
        let [brand,model,produced] = arr.split(" | ")
        if(!result.hasOwnProperty(brand)){
            result[brand] = {}
        }
        if(!result[brand].hasOwnProperty(model)){
            result[brand][model] = 0
        }
        result[brand][model] = result[brand][model] + Number(produced)
    }
    let res = []
    for(let [k, v] of Object.entries(result)){
        res.push(k)
        for(let[k1,v1] of Object.entries(v)){
            res.push(`###${k1} -> ${v1}`)
        }
    }
    console.log(res.join("\n"))
}
solve(['Audi | Q7 | 1000',

'Audi | Q6 | 100',

'BMW | X5 | 1000',

'BMW | X6 | 100',

'Citroen | C4 | 123',

'Volga | GAZ-24 | 1000000',

'Lada | Niva | 1000000',

'Lada | Jigula | 1000000',

'Citroen | C4 | 22',

'Citroen | C5 | 10'])