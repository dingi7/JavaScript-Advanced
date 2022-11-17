function solve() {
    let recNameEl = document.getElementById("recipientName")
    let titleEl = document.getElementById("title")
    let msgEl = document.getElementById("message")
    
    let listOfMailEl = document.getElementById("list")
    let sentListel = document.getElementsByClassName("sent-list")[0]
    let deletedListEl = document.getElementsByClassName("delete-list")[0]

    let addBtn = document.getElementById("add")
    let resetBtn = document.getElementById("reset")

    addBtn.addEventListener("click", add)
    resetBtn.addEventListener("click", reset)

    function reset(e){
        e.preventDefault()
        recNameEl.value = ""
        titleEl.value = ""
        msgEl.value = ""
    }

    function add(e){
        e.preventDefault()
        if(!recNameEl.value||!titleEl.value||!msgEl.value){
            return
        }
        let li = genEl("li")
        let fh4 = genEl("h4", "Title: "+ titleEl.value)
        let sh4 = genEl("h4", "Recipient Name: " + recNameEl.value)
        let span = genEl("span", msgEl.value)
        let div = genEl("div", undefined, "list-action")
        let btnSend = genEl("button","Send","send")
        let btnDel = genEl("button","Delete","delete")
        btnSend.setAttribute("type", "submit")
        btnDel.setAttribute("type", "submit")
        li.appendChild(fh4)
        li.appendChild(sh4)
        li.appendChild(span)
        div.appendChild(btnSend)
        div.appendChild(btnDel)
        li.appendChild(div)
        listOfMailEl.appendChild(li)
        recNameEl.value = ""
        titleEl.value = ""
        msgEl.value = ""

        btnSend.addEventListener("click", function(){
            let title = this.parentElement.parentElement.getElementsByTagName("h4")[0].textContent
            let receip = this.parentElement.parentElement.getElementsByTagName("h4")[1].textContent
            let li = genEl("li")
            let span1 = genEl("span", "To: "+ receip.split("Recipient Name:")[1])
            let span2 = genEl("span", title)
            let div = genEl("div")
            div.className = "btn"
            let delbtn = genEl("button", "Delete")
            delbtn.className = "delete"
            delbtn.setAttribute("type", "submit")
            li.appendChild(span1)
            li.appendChild(span2)
            li.appendChild(div)
            div.appendChild(delbtn)
            this.parentElement.parentElement.remove()
            sentListel.appendChild(li)
            delbtn.addEventListener("click", ()=>{
                div.remove()
                deletedListEl.appendChild(li)
            })
        })
        btnDel.addEventListener("click", function(){
            let title = this.parentElement.parentElement.getElementsByTagName("h4")[0].textContent
            let receip = this.parentElement.parentElement.getElementsByTagName("h4")[1].textContent
            let li = genEl("li")
            let span1 = genEl("span", "To: "+ receip.split("Recipient Name:")[1])
            let span2 = genEl("span", title)
            li.appendChild(span1)
            li.appendChild(span2)
            this.parentElement.parentElement.remove()
            deletedListEl.appendChild(li)
        })
    }

    function genEl(name,txt,id){
        let el = document.createElement(name)
        el.textContent = txt
        if(id){
            el.setAttribute("id",id);
        }
        return el
    }
}
solve()