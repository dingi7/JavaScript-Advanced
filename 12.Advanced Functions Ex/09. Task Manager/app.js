function solve() {
  let openedTasks = document.querySelectorAll("section")[1].children[1];
  let inProgress = document.querySelectorAll("section")[2].children[1];
  let finishedTasks = document.querySelectorAll("section")[3].children[1];

  let taskElement = document.querySelector("#task");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let addButton = document.getElementById("add");

  addButton.addEventListener("click", addElement);

  function addElement(e) {
    e.preventDefault();
    if (taskElement === "" || descriptionElement === "" || dateElement === "") {
      return;
    }
    let createArticle = createElement("article");
    let h3Create = createElement("h3", taskElement.value);
    let p1Create = createElement(
      "p",
      "Description: " + descriptionElement.value
    );
    let p2Create = createElement("p", "Due Date: " + dateElement.value);
    let divCreate = createElement("div", undefined, "flex");
    let startBtnCreate = createElement("button", "Start", "green");
    let deleteBtnCreate = createElement("button", "Delete", "red");

    createArticle.appendChild(h3Create);
    createArticle.appendChild(p1Create);
    createArticle.appendChild(p2Create);
    divCreate.appendChild(startBtnCreate);
    divCreate.appendChild(deleteBtnCreate);
    createArticle.appendChild(divCreate);
    openedTasks.appendChild(createArticle);

    startBtnCreate.addEventListener("click", () => {
      inProgress.appendChild(createArticle);
      let finishBtnCreate = createElement("button", "Finish", "orange");
      divCreate.appendChild(finishBtnCreate);
      startBtnCreate.remove();
      finishBtnCreate.addEventListener("click", () => {
        divCreate.remove();
        finishedTasks.appendChild(createArticle);
      });
    });
    deleteBtnCreate.addEventListener("click", () => {
      createArticle.remove();
    });
  }

  function createElement(type, textContent, className) {
    let el = document.createElement(type);
    el.textContent = textContent;
    if (className) {
      el.className = className;
    }
    return el;
  }
}
