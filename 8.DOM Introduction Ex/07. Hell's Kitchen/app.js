function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let result = [];
  let bestRestaurant = ""
  let bestSalary = 0
  function onClick() {
    //   TODO:
    let input = JSON.parse(document.getElementById("inputs").children[1].value);
    for (let data of input) {
      let [restourant, workerInfo] = data.split(" - ");
      if (!result.includes(restourant)) {
        result.push({
          restourant,
          avgSalary: 0,
          bestSalary: 0,
          sumSalary: 0,
          workerList: [],
        });
      }
      let workers = workerInfo.split(", ");
      let currentRestaurant = result.find((e) => e.restourant === restourant);
      for (let worker of workers) {
        updateRestaurant(currentRestaurant, worker);
      }
    }
    for(let rests of result){
      if(rests.avgSalary > bestSalary){
         bestSalary = rests.avgSalary
         bestRestaurant = rests.restourant
      }
    }
    let objToBeDisplayed = result.find(e => e.restourant === bestRestaurant)
    let output = `Name: ${bestRestaurant} Average Salary: ${objToBeDisplayed.avgSalary.toFixed(2)} Best Salary: ${objToBeDisplayed.bestSalary.toFixed(2)}`
    let output2 = ``
    sortedWorkerList = objToBeDisplayed.workerList.sort((w1, w2) => (w1.salary < w2.salary) ? 1 : (w1.salary > w2.salary) ? -1 : 0);
    for(let worker of sortedWorkerList){
      output2 += `Name: ${worker.name} With Salary: ${worker.salary} `
    }
    document.getElementsByTagName('p')[0].textContent = output
    document.getElementsByTagName('p')[1].textContent = output2.trim()
  }
  function updateRestaurant(obj, worker) {
   let [name, salary] = worker.split(" ");
   salary = Number(salary);
   obj.sumSalary += salary;
   if (obj.bestSalary < salary) {
     obj.bestSalary = Number(salary.toFixed(2));
   }
   obj.workerList.push({
     name,
     salary,
   });
   obj.avgSalary = Number((obj.sumSalary / obj.workerList.length).toFixed(2));
 }
}




// document.getElementsByTagName('p')[1]

// ["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]