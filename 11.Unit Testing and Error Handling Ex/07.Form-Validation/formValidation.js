function validate() {
    let btn = document.getElementById("submit")
    let usernameField = document.getElementById("username")
    let emailField = document.getElementById("email")
    let passField = document.getElementById("password")
    let confPassField = document.getElementById("confirm-password")
    let companySwitch = document.getElementById("company") 
    let companyInfo = document.getElementById("companyInfo")
    let companyNum = document.getElementById("companyNumber")
    let iscompany = false
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        let valid = true
        if(!usernameField.value.match(/^[A-Za-z0-9]*$/) || usernameField.value.length < 3 || usernameField.value.length > 20){
            applyBorder(usernameField, true)
            valid = false

        }
        else{
            applyBorder(usernameField, false)
        }
        if(!passField.value.match(/^\w{5,15}$/) || passField.value !== confPassField.value){
            applyBorder(passField, true)
            applyBorder(confPassField, true)
            valid = false
        }
        else{
            applyBorder(passField, false)
            applyBorder(confPassField, false)
        }
        if(!(/@(\w)*\./).test(emailField.value)){
            applyBorder(emailField, true)
            valid = false
        }
        else{
            applyBorder(emailField, false)
        }
        if(iscompany){
            if(Number(companyNum.value) < 1000 || Number(companyNum.value) > 9999){
                applyBorder(companyNum, true)
                valid = false
            }
            else{
                applyBorder(companyNum, false)
            }
        }

        if(valid){
            document.getElementById("valid").style.display = "block"
        }
        else{
            document.getElementById("valid").style.display = "none"
        }
    })

    companySwitch.addEventListener("change", (e)=>{
        if(companySwitch.checked){
            companyInfo.style.display = "block"
            iscompany = true
        }
        else{
            companyInfo.style.display = "none"
            iscompany = false
        }
    })

    function applyBorder(elem, tf){
        if(tf){
            elem.style.borderColor = "red"
        }
        else{
            elem.style.borderColor = ""
        }
    }
}
