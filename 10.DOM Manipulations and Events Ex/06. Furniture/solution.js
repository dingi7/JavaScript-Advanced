function solve() {
  let buttons = Array.from(document.querySelectorAll("button"));

  buttons[0].addEventListener("click", generate);
  buttons[1].addEventListener("click", buy);

  function generate() {
    let objectsss = JSON.parse(document.querySelectorAll("textarea")[0].value);
    for (let objects of objectsss) {
      let newTr = document.createElement("tr");
      let newTd = document.createElement("td");
      newTd.innerHTML = `<img src = ${objects.img}>`;
      let sndTd = document.createElement("td");
      sndTd.innerHTML = `<p>${objects.name}</p>`;
      let thirdTd = document.createElement("td");
      thirdTd.innerHTML = `<p>${objects.price}</p>`;
      let lasttD = document.createElement("td");
      lasttD.innerHTML = `<p>${objects.decFactor}</p>`;
      let check = document.createElement("td");
      check.innerHTML = `<input type="checkbox"/>`;
      newTr.appendChild(newTd);
      newTr.appendChild(sndTd);
      newTr.appendChild(thirdTd);
      newTr.appendChild(lasttD);
      newTr.appendChild(check);
      document.querySelector("tbody").appendChild(newTr);
    }
  }

  function buy() {
    let outputSpace = document.querySelectorAll("textarea")[1];
    let firstLine = `Bought furniture: `;
    let furnutures = [];
    let price = 0;
    let decorFact = 0;
    let checkedBoxes = document.querySelectorAll(
      "input[type=checkbox]:checked"
    );
    for (let box of checkedBoxes) {
      let td = Array.from(
        box.parentElement.parentElement.querySelectorAll("td")
      );
      price += Number(td[2].innerText);
      furnutures.push(td[1].innerText);
      decorFact += Number(td[3].innerText);
    }
    for(let i = 0; i < furnutures.length; i++){
      if(furnutures.length - i === 1){
        firstLine += `${furnutures[i]}`
      }
      else{
        firstLine += `${furnutures[i]}, `;
      }
    }
    if(checkedBoxes.length < 1){return}
    decorFact = decorFact / furnutures.length;
    outputSpace.textContent += firstLine + "\n";
    outputSpace.textContent += `Total price: ${price.toFixed(2)}\n`;
    outputSpace.textContent += `Average decoration factor: ${decorFact}`;
  }
}

