class Garden {
  constructor(spaceAvail) {
    this.spaceAvailable = Number(spaceAvail);
    this.plants = [];
    this.storage = [];
  }
  addPlant(name, spaceReq) {
    if (this.spaceAvailable <= spaceReq) {
      throw new Error("Not enough space in the garden.");
    }
    this.spaceAvailable -= Number(spaceReq);
    this.plants.push({ name, spaceReq, ripe: false, quantity: 0 });
    return `The ${name} has been successfully planted in the garden.`;
  }
  ripenPlant(name1, quantity) {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].name === name1) {
        if (this.plants[i].ripe === true) {
          throw new Error(`The ${name1} is already ripe.`);
        }
        if (quantity <= 0) {
          throw new Error("The quantity cannot be zero or negative.");
        }
        this.plants[i].ripe = true;
        this.plants[i].quantity += Number(quantity);
        return quantity === 1
          ? `${quantity} ${name1} has successfully ripened.`
          : `${quantity} ${name1}s have successfully ripened.`;
      }
    }
    throw new Error(`There is no ${name1} in the garden.`);
  }
  harvestPlant(name1) {
    for (let i = 0; i < this.plants.length; i++) {
      if (this.plants[i].name === name1) {
        if (this.plants[i].ripe === false) {
          throw new Error(
            `The ${name1} cannot be harvested before it is ripe.`
          );
        }
        this.spaceAvailable += this.plants[i].spaceReq;
        let nameForstor = this.plants[i].name;
        let qu = this.plants[i].quantity;
        this.storage.push({ nameForstor, qu });
        this.plants.splice(i, 1);
        return `The ${name1} has been successfully harvested.`;
      }
    }
    throw new Error(`There is no ${name1} in the garden.`);
  }
  generateReport(){
    let result = [`The garden has ${this.spaceAvailable} free space left.`]
    let out = `Plants in the garden: `
    let sorted = this.plants.sort((a,b)=> (a.name).localeCompare(b.name))
    for(let i =0; i< sorted.length; i++){
        if(sorted.length === i+1){
            out += `${sorted[i].name}`
        }
        else{
        out += `${sorted[i].name}, `
        }
    }
    result.push(out.trim())
    if(this.storage.length <= 0){result.push("Plants in storage: The storage is empty.")}
    else{
        let storageOut = `Plants in storage: `
        for(let i =0; i< this.storage.length; i++){
            if(this.storage.length === i + 1){
                storageOut += `${this.storage[i].nameForstor} (${this.storage[i].qu})`
            }
            else{
            storageOut += `${this.storage[i].nameForstor} (${this.storage[i].qu}), `
            }
        }
        result.push(storageOut.trim())
    }
    return result.join('\n')
  }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.generateReport());












