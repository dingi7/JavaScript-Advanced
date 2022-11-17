function calculator() {
  let selector1;
  let selector2;
  let resulSelector;
  let action = {
    init: (selectorA, selectorB, resulSelectorA) => {
      selector1 = document.querySelector(selectorA);
      selector2 = document.querySelector(selectorB);
      resulSelector = document.querySelector(resulSelectorA);
    },
    add: () => {
      let sum = Number(selector1.value) + Number(selector2.value);
      resulSelector.value = sum;
    },
    subtract: () => {
      let sum = Number(selector1.value) - Number(selector2.value);
      resulSelector.value = sum;
    },
  };
  return action
}
const calculate = calculator ();

calculate.init ('#num1', '#num2', '#result');