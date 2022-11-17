function solve() {
  let text = document.getElementById("input").value
  document.getElementById("output").innerHTML = "";
  let sentances = text.split(".").filter(x => x.length > 0)
  for(let i = 0; i < sentances.length; i += 3){
    let res = []
    for(let x = 0; x < 3; x++){
      if(sentances[i + x]){
      res.push(sentances[i+x])
    }
    }
    let resText = res.join(". ") + ".".trim()
    document.getElementById("output").innerHTML += `<p>${resText}</p>`
  }

}