class VegetableStore {
  constructor(owner, location) {
    this.owner = owner;
    this.location = location;
    this.avaliableProducts = [];
  }
  loadingVegetables(vegetables) {
    let adde = [];
    vegetables.forEach((element) => {
      let [type, quantity, price] = element.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let product = this.avaliableProducts.find((prod) => prod.type === type);

      if (product) {
        product.quantity += quantity;
        if (product.price < price) {
          product.price = price;
        }
      } else {
        this.avaliableProducts.push({ type, quantity, price });
        adde.push(type);
      }
    });
    return `Successfully added ${adde.join(", ")}`;
  }
  buyingVegetables(selectedProducts) {
    let totalPrice = 0;
    selectedProducts.forEach((element) => {
      let [type, quantity] = element.split(" ");
      let product = this.avaliableProducts.find((prod) => prod.type === type);
      if (!product) {
        throw new Error(
          `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      if (product.quantity < quantity) {
        throw new Error(
          `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
            2
          )}.`
        );
      }
      totalPrice += product.price * quantity;
      product.quantity = product.quantity - quantity;
    });
    return `Great choice! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }
  rottingVegetable(type, quantity) {
    let product = this.avaliableProducts.find(prod => prod.type === type)
    if(!product){
        throw new Error(`${type} is not available in the store.`)
    }
    if(product.quantity < quantity){
        product.quantity = 0
        return `The entire quantity of the ${type} has been removed.`
    }
    product.quantity = product.quantity - quantity
    return `Some quantity of the ${type} has been removed.`
  }
  revision(){
    let sorted = this.avaliableProducts.sort((a,b) => a.price - b.price)
    let result = [`Available vegetables:`]
    sorted.forEach(element =>{
        result.push(`${element.type}-${element.quantity}-$${element.price}`)
    })
    return `${result.join("\n")}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.` 
  }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",

"Celery 5.5 2.2", "Celery 0.5 2.5"]));

console.log(vegStore.rottingVegetable("Okra", 1));

console.log(vegStore.rottingVegetable("Okra", 2.5));

console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));

console.log(vegStore.revision());
