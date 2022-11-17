function solve() {
    let nameElement = document.getElementsByTagName("input")[0]
    let hallElement = document.getElementsByTagName("input")[1]
    let priceElement = document.getElementsByTagName("input")[2]
    let onScreenElement = document.getElementsByTagName("button")[0]
    let clearElement = document.getElementsByTagName("button")[1]
    let moviesOnScreenElement = document.querySelectorAll("section")[0].children[1]
    let archive = document.querySelectorAll("section")[1].children[1]

    onScreenElement.addEventListener("click", addOnScreen)
    clearElement.addEventListener("click", clear)

    function addOnScreen(e){
        e.preventDefault()
        if(nameElement.value === "" || hallElement.value === "" || priceElement.value === ""){return}
        if(isNaN(priceElement.value)){return}
        let liCreate = createElement("li")
        let spanCreate = createElement("span", nameElement.value)
        let strong1Create = createElement("strong", "Hall: " + hallElement.value)
        let divCreate = createElement("div")
        let strong2Create = createElement("strong", Number(priceElement.value).toFixed(2))
        let inputCreate = createElement("input")
        let btnCreate = createElement("button", "Archive")
        inputCreate.placeholder = "Tickets Sold"
        let price = Number(priceElement.value)
        liCreate.appendChild(spanCreate)
        liCreate.appendChild(strong1Create)
        divCreate.appendChild(strong2Create)
        divCreate.appendChild(inputCreate)
        divCreate.appendChild(btnCreate)
        liCreate.appendChild(divCreate)
        moviesOnScreenElement.appendChild(liCreate)
        nameElement.value = ""
        hallElement.value = ""
        priceElement.value = ""

        btnCreate.addEventListener("click", ()=>{
            if(inputCreate.value === ""){return}
            if(isNaN(inputCreate.value)){return}
            liCreate.remove()
            let newLi = createElement("li")
            newLi.appendChild(spanCreate)
            let profit = Number(inputCreate.value) * Number(price)
            let newStrong = createElement("strong","Total amount: " + profit.toFixed(2))
            newLi.appendChild(newStrong)
            let delBtn = createElement("button", "Delete")
            newLi.appendChild(delBtn)
            archive.appendChild(newLi)
            delBtn.addEventListener("click", ()=>{
                newLi.remove()
            })
        })

    }

    function clear(e){
        e.preventDefault()
        let length = archive.children.length
        for(let i = 0; i < length; i++){
            document.querySelectorAll("section")[1].children[1].children[0].remove()
        }

    }

    function createElement(type, textContent, className) {
        let el = document.createElement(type);
        el.textContent = textContent;
        if (className) {
          el.className = className;
        }
        return el;
      }
}