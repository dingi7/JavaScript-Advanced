function calc(data) {
  let res = [];
  let nums = [];
  let operators = [];
  let op = true;
  for (let el of data) {
    if (typeof el === "string") {
      operators.push(el);
    } else {
      nums.push(el);
    }
  }
  for (let operator of operators) {
    // let operator = operators.shift()
    if (nums.length > 1) {
      let res = 0;
      let num2 = nums.pop();
      let num1 = nums.pop();
      switch (operator) {
        case "+":
          res = num1 + num2;
          break;
        case "-":
          res = num1 - num2;
          break;
        case "*":
          res = num1 * num2;
          break;
        case "/":
          res = Math.ceil(num1 / num2);
          break;
        default:
          break;
      }
      nums.push(res);
    } else {
      console.log("Error: not enough operands!");
      op = false;
    }
  }
  if (nums.length === 1 && op === true) {
    res.push(nums);
    console.log(res.join(""));
  } else if (nums.length > 1 && op === true) {
    console.log(`Error: too many operands!`);
  }
}
calc([-1,
    1,
    "+",
    101,
    "*",
    18,
    "+",
    3,
    "/"])