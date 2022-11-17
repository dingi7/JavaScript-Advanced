window.addEventListener("load", solve);

function solve() {
  let firstNameEl = document.getElementById("first-name")
  let lastNameEl = document.getElementById("last-name")
  let ageEl = document.getElementById("age")
  let storyTitleEl = document.getElementById("story-title")
  let genreTypeEl = document.getElementById("genre")
  let storyEl = document.getElementById("story")
  let div = document.getElementById("main")

  let publishBtn = document.getElementById("form-btn")

  let previewUl = document.getElementById("preview-list")

  publishBtn.addEventListener("click", preview)

  function preview(e){
    e.preventDefault()
    if(!firstNameEl.value || !lastNameEl.value || !ageEl.value || !storyTitleEl.value || !genreTypeEl.value || !storyEl.value){
      return
    }
    let newLi = createEl("li", undefined, "story-info")
    let article = createEl("article")
    let h4 = createEl("h4", "Name: "+ firstNameEl.value + " " + lastNameEl.value)
    let p1 =createEl("p", "Age: "+ ageEl.value)
    let p2 = createEl("p", "Title: " + storyTitleEl.value)
    let p3 = createEl("p", "Genre: " + genreTypeEl.value)
    let p4 = createEl("p",storyEl.value)
    let saveBtn = createEl("button", "Save Story", "save-btn")
    let editBtn = createEl("button", "Edit Story", "edit-btn")
    let delBtn = createEl("button", "Delete Story", "delete-btn")
    newLi.appendChild(article)
    article.appendChild(h4)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(p3)
    article.appendChild(p4)
    newLi.appendChild(saveBtn)
    newLi.appendChild(editBtn)
    newLi.appendChild(delBtn)
    previewUl.appendChild(newLi)
    genreTypeEl.value = ""
    firstNameEl.value = ""
    lastNameEl.value = ""
    ageEl.value =""
    storyTitleEl.value =""
    storyEl.value =""
    // clear fields
    publishBtn.disabled = true
    saveBtn.disabled = false
    editBtn.disabled = false
    delBtn.disabled = false

    editBtn.addEventListener("click", function(e){
      let textFields = this.parentElement.querySelector("article")
      let h4 = textFields.querySelector("h4").textContent.split("Name: ")[1]
      let p1 = textFields.querySelectorAll("p")[0].textContent.split("Age: ")[1]
      let p2 = textFields.querySelectorAll("p")[1].textContent.split("Title: ")[1]
      let p3 = textFields.querySelectorAll("p")[2].textContent.split("Genre: ")[1]
      let p4 = textFields.querySelectorAll("p")[3].textContent
      firstNameEl.value = h4.split(" ")[0]
      lastNameEl.value = h4.split(" ")[1]
      ageEl.value = p1
      storyTitleEl.value = p2
      genreTypeEl.value = p3
      storyEl.value = p4
      this.parentElement.remove()
      //PROBABLE CAUSE
      publishBtn.disabled = false
      saveBtn.disabled = true
      editBtn.disabled = true
      delBtn.disabled = true
    })
    saveBtn.addEventListener("click", ()=>{
      let element = createEl("h1", "Your scary story is saved")
      div.innerHTML = ""
      div.appendChild(element)
    })
    delBtn.addEventListener("click", ()=>{
      newLi.remove()
      publishBtn.disabled = false
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
