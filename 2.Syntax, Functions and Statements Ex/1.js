// `I need ${money} to buy {weight} kilograms {fruit}.`

function fruit(name, grams, price2){
    let price = grams * price2 * 0.001
    console.log(`I need $${price.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${name}.`);
}
fruit('orange', 2500, 1.80)