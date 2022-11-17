function addItem() {
    console.log('TODO:...');
    let input = document.getElementById("newItemText")
    let out = document.getElementById("items")
    let liitem = document.createElement('li')
    liitem.textContent = input.value
    out.appendChild(liitem)
    input.value = ""
}