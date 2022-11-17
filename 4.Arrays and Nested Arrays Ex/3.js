function solve(arr) {
  let res = [];
  let num = 1;
  for (let i of arr) {
    switch (i) {
      case "add":
        res.push(num);
        num++;
        break;
      case "remove":
        num++;
        res.pop();
        break;
      default:
        break;
    }
  }
  if(res.length === 0){
    console.log("Empty");
  }
  else{
  console.log(res.join("\n"));
}
}

solve(["remove", "remove", 'remove', 'remove', "remove"]);
