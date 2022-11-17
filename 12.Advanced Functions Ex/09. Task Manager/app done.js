function solve() {
  let open = document.querySelectorAll("section")[1].children[1];
  let inProgress = document.querySelectorAll("section")[2].children[1];
  let finished = document.querySelectorAll("section")[3].children[1];
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", add);
  function add(e) {
    e.preventDefault();
    let task = document.getElementById("task").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("date").value;
    if (task !== "" && description !== "" && dueDate !== "") {
      let article = document.createElement("article");
      let h3 = document.createElement("h3");
      h3.textContent = task;
      let p1 = document.createElement("p");
      p1.textContent = "Description: " + description;
      let p2 = document.createElement("p");
      p2.textContent = "Due Date: " + dueDate;
      let newDiv = document.createElement("div");
      newDiv.classList.add("flex");
      article.appendChild(h3);
      article.appendChild(p1);
      article.appendChild(p2);
      let btn1 = document.createElement("button");
      btn1.classList.add("green");
      btn1.textContent = "Start";
      btn1.addEventListener("click", start);
      let btn2 = document.createElement("button");
      btn2.classList.add("red");
      btn2.textContent = "Delete";
      btn2.addEventListener("click", del);
      newDiv.appendChild(btn1);
      newDiv.appendChild(btn2);
      article.appendChild(newDiv);
      open.appendChild(article);
    }
  }

  function start(e) {
    e.preventDefault();
    let article = this.parentElement.parentElement;
    let div = article.getElementsByClassName("flex")[0];
    let newBtn = document.createElement("button");
    newBtn.textContent = "Finish";
    newBtn.classList.add("orange");
    let btn = article.getElementsByClassName("green")[0];
    btn.parentNode.removeChild(btn);
    inProgress.appendChild(article);
    newBtn.addEventListener("click", finish);
    div.appendChild(newBtn);
  }
  function del(e) {
    e.preventDefault();
    let article = this.parentElement.parentElement;
    article.parentNode.removeChild(article);
  }

  function finish(e) {
    e.preventDefault();
    let article = this.parentElement.parentElement;
    let div = article.getElementsByClassName("flex")[0];
    div.parentNode.removeChild(div);
    finished.appendChild(article);
  }
}
