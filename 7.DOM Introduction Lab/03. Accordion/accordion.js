function toggle() {
    let but = document.getElementsByClassName("button")[0].textContent
    if(but === "More"){
        document.getElementById("extra").style.display="block";
        document.getElementsByClassName("button")[0].textContent = "Less"
    }
    else if(but === "Less"){
        document.getElementById("extra").style.display="none";
        document.getElementsByClassName("button")[0].textContent = "More"
    }
}