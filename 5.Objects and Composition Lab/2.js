function townPopulation(arr) {
  let res = new Map();
  for (let i = 0; i < arr.length; i++) {
    let [name, population] = arr[i].split(" <-> ");
    if (!res.hasOwnProperty(name)) {
      res.set(name, Number(population));
    } else {
      res.set(name, Number(population));
    }
  }
  for(let i of res){
    console.log(`${i[0]} : ${i[1]}`);
  }
}

townPopulation(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])