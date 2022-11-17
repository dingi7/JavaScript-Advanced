function solution() {
  let store = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };
  let recipeEnum = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };
  return function (string) {
    let args;
    if (string.length === 6) {
      let output = ``;
      for (let [e, v] of Object.entries(store)) {
        output += `${e}=${v} `;
      }
      return output.trim();
    } else {
      args = string.split(" ");
    }
    if (args[0] === "restock") {
      store[args[1]] = store[args[1]] + Number(args[2]);
      return "Success";
    } else if (args[0] === "prepare") {
      let newObjs = Object.assign({}, store);
      let recObj = recipeEnum[args[1]];
      for (let [e, v] of Object.entries(recObj)) {
        if (newObjs[e] >= v * Number(args[2])) {
          newObjs[e] = newObjs[e] - v * Number(args[2]);
        } else {
          return `Error: not enough ${e} in stock`;
        }
      }
      store = Object.assign({}, newObjs);
      return "Success";
    }
  };
}

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
