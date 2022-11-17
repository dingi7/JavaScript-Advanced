function catalog(input){
    let result = {}
    for(let el of input){
        let [name, price] = el.split(" : ")
        price = Number(price)
        result[name] = price
    }
    let sorted = Object.entries(result).sort()
    let letter = ""
    for(let ob of sorted){
        if(ob[0].charAt(0) !== letter){
            letter = ob[0].charAt(0)
            console.log(letter);
        }
        console.log(`  ${ob[0]}: ${ob[1]}`);
    }
}
catalog(
    ['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']
)