window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById("make");
  let model = document.getElementById("model");
  let year = document.getElementById("year");
  let fuelType = document.getElementById("fuel");
  let originalPrice = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");
  let publishBtn = document.getElementById("publish");
  let tableBody = document.getElementById("table-body");
  let soldCars = document.getElementById("cars-list")
  let totalProfit = document.getElementById("profit")

  publishBtn.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();
    if (
      make.value === "" ||
      model.value === "" ||
      year.value === "" ||
      fuelType === "" ||
      Number(originalPrice.value) > Number(sellingPrice.value)
    ) {
      return;
    }
    let makeR = make.value;
    let modelR = model.value;
    let yearR = year.value;
    let fuelR = fuelType.value;
    let originalPriceR = Number(originalPrice.value);
    let sellingPriceR = Number(sellingPrice.value);
    let trClass = createElement("tr", undefined, "row");
    let td1 = createElement("td", makeR);
    let td2 = createElement("td", modelR);
    let td3 = createElement("td", yearR);
    let td4 = createElement("td", fuelR);
    let td5 = createElement("td", originalPriceR);
    let td6 = createElement("td", sellingPriceR);
    let tdBtn = createElement("td");
    let editBtn = createElement("button", "Edit", "action-btn edit");
    let sellBtn = createElement("button", "Sell", "action-btn sell");
    tdBtn.appendChild(editBtn);
    tdBtn.appendChild(sellBtn);
    trClass.appendChild(td1);
    trClass.appendChild(td2);
    trClass.appendChild(td3);
    trClass.appendChild(td4);
    trClass.appendChild(td5);
    trClass.appendChild(td6);
    trClass.appendChild(tdBtn);
    tableBody.appendChild(trClass);
    make.value = "";
    model.value = "";
    year.value = "";
    fuelType.value = "";
    originalPrice.value = "";
    sellingPrice.value = "";

    editBtn.addEventListener("click", () => {
      make.value = makeR;
      model.value = modelR;
      year.value = yearR;
      fuelType.value = fuelR;
      originalPrice.value = originalPriceR;
      sellingPrice.value = sellingPriceR;
      trClass.remove();
    });

    sellBtn.addEventListener("click", ()=>{
      let li1 = createElement("li", undefined, "each-list")
      let span1 = createElement("span", makeR + " " + modelR)
      let span2 = createElement("span", yearR)
      let span3 = createElement("span", Math.abs(originalPriceR - sellingPriceR))
      li1.appendChild(span1);
      li1.appendChild(span2);
      li1.appendChild(span3);
      soldCars.appendChild(li1)
      let totlProfit = Math.abs(originalPriceR - sellingPriceR) + Number(totalProfit.textContent)
      totalProfit.textContent = totlProfit.toFixed(2)
      trClass.remove();
    })
  }

  function createElement(type, text, className) {
    let el = document.createElement(type);
    el.textContent = text;
    if (className) {
      el.className = className;
    }
    return el;
  }
}
