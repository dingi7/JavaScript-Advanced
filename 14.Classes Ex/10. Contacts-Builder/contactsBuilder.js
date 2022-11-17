class Contact{
    constructor(fName, lName,pNum,eAddy){
        this.fName = fName
        this.lName = lName
        this.pNum = pNum
        this.eAddy = eAddy
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this.titleDiv) {
            this.titleDiv.classList.add(this._online ? 'online' : 'title')
        }
    }
    elementCreator(tagName,text){
        let el = document.createElement(tagName)
        el.textContent = text
        return el
    }

    render(id){
        this.article = this.elementCreator("article")
        this.titleDiv = this.elementCreator("div", `${this.fName} ${this.lName}`)
        this.titleDiv.className = "title"
        this.btn = this.elementCreator("button", '&#8505;')
        this.titleDiv.appendChild(this.btn)
        this.infoDiv = this.elementCreator("div")
        this.infoDiv.className = "info"
        this.span1 = this.elementCreator("span", "&phone;" + " " + this.pNum)
        this.span2 = this.elementCreator("span", "&#9993" + " " + this.eAddy)
        this.infoDiv.appendChild(this.span1)
        this.infoDiv.appendChild(this.span2)
        this.infoDiv.style.display = "none"
        this.btn.addEventListener("click", ()=>{
            this.infoDiv.style.display === "none" ? this.infoDiv.style.display = "block" : this.infoDiv.style.display = "none"
        })
        this.article.appendChild(this.titleDiv)
        this.article.appendChild(this.infoDiv)
        document.getElementById(id).appendChild(this.article)
    }
}