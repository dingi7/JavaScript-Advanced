function solve(){
  let string = document.getElementById('text').value
  let caseNeeded = document.getElementById('naming-convention').value
  let lower = string.toLowerCase()
  let output = ""
  if(caseNeeded === "Pascal Case"){
      let splited = lower.split(" ")
      for(let text of splited){
          text = text.charAt(0).toUpperCase() + text.slice(1);
          output += text
      }
  }
  else if(caseNeeded === "Camel Case"){
      let splited = lower.split(" ")
      let i = 0
      for(let text of splited){ 
        text = text.charAt(0).toUpperCase() + text.slice(1);
        output += text
      }
      output = output.charAt(0).toLowerCase() + output.slice(1);
  }
  else{
      output = "Error!"
  }
  document.getElementById("result").innerText = output
}