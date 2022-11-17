function price(data) {
  let res = {};
  for (let entry of data) {
    let [town, product, price] = entry.split(" | ");
    price = Number(price);
    if (!res.hasOwnProperty(product)) {
      res[product] = [price, town];
    } else {
      if (res[product][0] > price) {
        res[product] = [price, town];
      }
    }
  }
  let i = 0;
  for (let [price, town] of Object.values(res)) {
    let product = Object.keys(res);
    console.log(`${product[i]} -> ${price} (${town})`);
    i++;
  }
}
// Audi -> 1000 (Mexico City)
price([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
