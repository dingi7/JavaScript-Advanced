function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let info =  Array.from(document.querySelectorAll('tr'))
      let search = document.getElementById('searchField').value
      info.shift()
      info.shift()
      for(let i = 0; i < info.length; i++){
          let text = info[i].textContent
          if(search !== ""){
          if(text.includes(search)){
            info[i].classList.add('select')
          }
          else{
            info[i].classList.remove('select')
          }
         }
      }
      document.getElementById('searchField').value = ""
   }
}