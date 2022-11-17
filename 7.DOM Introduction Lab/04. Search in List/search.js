function search() {
   let towns = Array.from(document.querySelectorAll("ul li"))
   let sercher = document.getElementById("searchText").value
   let matches = 0
   for(let item of towns){
      let text = item.textContent
      if(text.includes(sercher)){
         item.style.textDecoration = "underline"
         item.style.fontWeight = "bold"
         matches++
      }
      else{
         item.style.textDecoration = ""
         item.style.fontWeight = ""
      }
   }
   document.getElementById("result").innerText = `${matches} matches found`
}
