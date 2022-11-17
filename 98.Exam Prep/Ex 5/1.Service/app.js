window.addEventListener('load', solve);

function solve() {
    let productType = document.getElementById("type-product")
    let descriptionEl = document.getElementById("description")
    let clientNameEl = document.getElementById("client-name")
    let clientPhoneEl = document.getElementById("client-phone")
    let sendFormBtn = document.querySelectorAll("button")[0]
    let clearBtn = document.querySelectorAll("button")[1]
    let receiveOrders = document.getElementById("received-orders")
    let completedOrders = document.getElementById("completed-orders")

    clearBtn.addEventListener("click", clear)
    sendFormBtn.addEventListener("click", sendForm)

    function sendForm(e){
        e.preventDefault()
        if(!productType.value || !descriptionEl.value || !clientNameEl.value|| !clientPhoneEl.value){
            return
        }
        let div = createElement("div", undefined, "container")
        let h2 = createElement("h2", "Product type for repair: "+productType.value)
        let h3 = createElement("h3", "Client information: " + clientNameEl.value +", " + clientPhoneEl.value)
        let h4 = createElement("h4", "Description of the problem: "+ descriptionEl.value)
        let startBtn = createElement("button", "Start repair", "start-btn")
        let finishBtn = createElement("button", "Finish repair", "finish-btn")
        finishBtn.disabled = true
        div.appendChild(h2)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(startBtn)
        div.appendChild(finishBtn)
        receiveOrders.appendChild(div)
        //clear fields
        // productType.value = ""
        descriptionEl.value = ""
        clientNameEl.value = ""
        clientPhoneEl.value = ""

        startBtn.addEventListener("click", ()=>{
            finishBtn.disabled = false
            startBtn.disabled = true
        })

        finishBtn.addEventListener("click", ()=>{
            finishBtn.remove()
            startBtn.remove()
            completedOrders.appendChild(div)
        })
    }

    function clear(e){
        e.preventDefault()
        while(completedOrders.children.length > 3){
            completedOrders.children[3].remove()
        }
    }

    function createElement(name,text,className){
        let el = document.createElement(name)
        el.textContent = text
        if(className){
            el.className = className
        }
        return el
    }
}