function solve() {
  document.querySelector("button").addEventListener("click", onClick);
  let option = document.createElement('option')
  option.value = "hexadecimal"
  option.textContent = "hexadecimal"
  document.getElementById('selectMenuTo').appendChild(option)
  // document.getElementById('selectMenuTo').appendChild(document.createElement('option'))
  // document.getElementById('selectMenuTo').appendChild(document.createElement('option'))
  // document.getElementById('selectMenuTo')[1].value = "binary"
  // document.getElementById('selectMenuTo')[1].innerHTML = "binary"
  // document.getElementById('selectMenuTo')[2].value = "hexadecimal"
  // document.getElementById('selectMenuTo')[2].innerHTML = "hexadecimal"
  function onClick() {
    let format = document.getElementById("selectMenuTo").value;
    let number = Number(document.getElementById("input").value);
    if (format !== "") {
      if (format === "binary") {
        number = number.toString(2);
        document.getElementById("result").value = number;
      } else if (format === "hexadecimal") {
        number = number.toString(16).toUpperCase();
        document.getElementById("result").value = number;
      }
    }
  }
}
