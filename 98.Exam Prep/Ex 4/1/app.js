function solve() {  
    let firstNameEl = document.getElementById("fname")
    let lastNameEl = document.getElementById("lname")
    let emailEl = document.getElementById("email")
    let birthEl = document.getElementById("birth")
    let possitionEl  = document.getElementById("position")
    let salaryEl = document.getElementById("salary")

    let hireBtn = document.getElementById("add-worker")

    let workersTbody = document.getElementById("tbody")
    let budgetSpan = document.getElementById("sum")

    hireBtn.addEventListener("click", hireWorker)

    function hireWorker(e){
        e.preventDefault()
        if(!firstNameEl.value || !lastNameEl.value || !emailEl.value || !birthEl.value || !possitionEl.value || !salaryEl.value){
            return
        }
        let mainTr = createEl("tr")
        let td1 = createEl("td", firstNameEl.value)
        let td2 = createEl("td", lastNameEl.value)
        let td3 = createEl("td", emailEl.value)
        let td4 = createEl("td", birthEl.value)
        let td5 = createEl("td", possitionEl.value)
        let td6 = createEl("td", salaryEl.value)
        let btnTd = createEl("td")
        let firedBtn = createEl("button", "Fired", "fired")
        let editBtn = createEl("button", "Edit", "edit")
        let sum = Number(budgetSpan.textContent) + Number(salaryEl.value)
        budgetSpan.textContent = sum.toFixed(2)
        btnTd.appendChild(firedBtn)
        btnTd.appendChild(editBtn)
        mainTr.appendChild(td1)
        mainTr.appendChild(td2)
        mainTr.appendChild(td3)
        mainTr.appendChild(td4)
        mainTr.appendChild(td5)
        mainTr.appendChild(td6)
        mainTr.appendChild(btnTd)
        workersTbody.appendChild(mainTr)

        firstNameEl.value = ""
        lastNameEl.value = ""
        salaryEl.value = ""
        emailEl.value = ""
        birthEl.value = ""
        possitionEl.value = ""

        editBtn.addEventListener("click", ()=>{
            let sum = Number(editBtn.parentElement.parentElement.getElementsByTagName("td")[5].textContent)
            let budget = Number(budgetSpan.textContent) - sum
            budgetSpan.textContent = budget.toFixed(2)
            firstNameEl.value = editBtn.parentElement.parentElement.getElementsByTagName("td")[0].textContent
            lastNameEl.value = editBtn.parentElement.parentElement.getElementsByTagName("td")[1].textContent
            emailEl.value = editBtn.parentElement.parentElement.getElementsByTagName("td")[2].textContent
            birthEl.value = editBtn.parentElement.parentElement.getElementsByTagName("td")[3].textContent
            possitionEl.value = editBtn.parentElement.parentElement.getElementsByTagName("td")[4].textContent
            salaryEl.value = sum
            editBtn.parentElement.parentElement.remove()
        })

        firedBtn.addEventListener("click", ()=>{
            let sum = Number(editBtn.parentElement.parentElement.getElementsByTagName("td")[5].textContent)
            let budget = Number(budgetSpan.textContent) - sum
            budgetSpan.textContent = budget.toFixed(2)
            firedBtn.parentElement.parentElement.remove()
        })
    }

    function createEl(name, text, className){
        let el = document.createElement(name)
        el.textContent = text
        if(className){
            el.className = className
        }
        return el
    }
}
solve()