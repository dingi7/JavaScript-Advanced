class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }
  addCar(model,horsepower,price,mileage){
    if(typeof model !== "string" || !model){
        throw new Error("Invalid input!")
    }
    if(!Number.isInteger(horsepower) || horsepower < 0){
        throw new Error("Invalid input!")
    }
    if(typeof price !== "number" || price < 0|| typeof mileage !== "number" || mileage <0){
        throw new Error("Invalid input!")
    }
    this.availableCars.push({model,horsepower,price,mileage})
    return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
  }
  sellCar(model1,desiredMileage){
    let found = false
    for(let i = 0; i< this.availableCars.length; i++){
        if(this.availableCars[i].model === model1){
            found = true
            this.soldCars.push(this.availableCars[i])
            this.availableCars.splice(i,1)
        }
    }
    if(!found){
        throw new Error(`${model1} was not found!`)
    }
    let index = this.soldCars.length - 1
    if(this.soldCars[index].mileage <= desiredMileage){
        let soldPrice = this.soldCars[index].price
        this.totalIncome += Number(soldPrice)
        delete this.soldCars[index].mileage
        this.soldCars[index].price = soldPrice
        return `${model1} was sold for ${soldPrice.toFixed(2)}$`
    }
    else if(this.soldCars[index].mileage - desiredMileage <= 40000){
        let soldPrice = this.soldCars[index].price * 0.95
        this.totalIncome += Number(soldPrice)
        delete this.soldCars[index].mileage
        this.soldCars[index].price = soldPrice
        return `${model1} was sold for ${soldPrice.toFixed(2)}$`
    }
    else if(this.soldCars[index].mileage - desiredMileage > 40000){
        let soldPrice = this.soldCars[index].price * 0.90
        this.totalIncome += Number(soldPrice)
        delete this.soldCars[index].mileage
        this.soldCars[index].price = soldPrice
        return `${model1} was sold for ${soldPrice.toFixed(2)}$`
    }
  }
  currentCar(){
    if(this.availableCars.length <= 0){
        return `There are no available cars`
    }
    let result = ["-Available cars:"]
    for(let i =0; i < this.availableCars.length; i++){
        let out = `---${this.availableCars[i].model} - ${this.availableCars[i].horsepower} HP - ${this.availableCars[i].mileage.toFixed(2)} km - ${this.availableCars[i].price.toFixed(2)}$`
        result.push(out)
    }
    return result.join('\n')
  }
  salesReport(criteria){
    if(criteria === "model"){
        this.soldCars.sort((a,b) => a.model.localeCompare(b.model))
    }
    else if(criteria === "horsepower"){
        this.soldCars.sort((a,b) => b.horsepower - a.horsepower)
    }
    else{
        throw new Error("Invalid criteria!")
    }
    let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${this.soldCars.length} cars sold:`]
    for(let i =0; i<this.soldCars.length;i++){
        let out = `---${this.soldCars[i].model} - ${this.soldCars[i].horsepower} HP - ${this.soldCars[i].price.toFixed(2)}$`
        result.push(out)
    }
    return result.join('\n')
  }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));



