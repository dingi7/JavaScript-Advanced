function validate() {
    let email = document.getElementById("email")
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    email.addEventListener("change", ()=>{
        if(email.value.match(re)){
            email.classList.remove("error")
        }
        else if(!email.value.match(re)){
            email.classList.add("error")
        }
    })
}