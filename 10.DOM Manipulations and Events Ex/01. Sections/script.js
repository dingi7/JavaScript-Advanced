function create(words) {
   let main = document.getElementById('content')
   for(let word of words){
      let newDiv = document.createElement('div')
      let newP = document.createElement('p')
      newP.textContent = word
      newP.style.display = "none"
      newDiv.appendChild(newP)
      newDiv.addEventListener("click", () => {
         newP.style.display = "block"
      })
      main.appendChild(newDiv)
   }
}