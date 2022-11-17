function deleteByEmail() {
    let input = document.getElementsByName("email")[0].value.trim()
    let table = Array.from(document.querySelectorAll('#customers td:nth-child(2)'))
    let found = false
    for(let cell of table){
        if(cell.textContent === input){
            cell.parentElement.remove()
            found = true
        }
    }
    let result = document.getElementById('result')
    result.textContent = found ?  'Deleted.' : 'Not found.'
}