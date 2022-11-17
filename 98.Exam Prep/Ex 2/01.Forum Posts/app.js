window.addEventListener("load", solve);

function solve() {
  let postTitleEl = document.getElementById("post-title")
  let postCategoryEl = document.getElementById("post-category")
  let postContentEl = document.getElementById("post-content")
  let postsForReviewUL = document.getElementById("review-list")
  let publishedPosts = document.getElementById("published-list")
  let publishBtn = document.getElementById("publish-btn")

  publishBtn.addEventListener("click", publish)

  function publish(e){
    e.preventDefault()
    if(!postCategoryEl.value||!postTitleEl.value||!postContentEl.value){
      return
    }
    let li = createElement("li", undefined, "rpost")
    let article = createElement("article")
    let newH4 = createElement("h4", postTitleEl.value)
    let p1 = createElement("p", "Category: "+postCategoryEl.value)
    let p2 = createElement("p", "Content: "+postContentEl.value)
    let editBtn = createElement("button", "Edit", "action-btn edit")
    let approveBtn = createElement("button", "Approve", "action-btn approve")
    article.appendChild(newH4)
    article.appendChild(p1)
    article.appendChild(p2)
    article.appendChild(approveBtn)
    article.appendChild(editBtn)
    li.appendChild(article)
    postsForReviewUL.appendChild(li)
    clear()
    editBtn.addEventListener("click", (e)=>{
      postTitleEl.value = li.getElementsByTagName('h4')[0].textContent;
      postCategoryEl.value = li.getElementsByTagName('p')[0].textContent.split('Category: ')[1];
      postContentEl.value = li.getElementsByTagName('p')[1].textContent.split('Content: ')[1];
      li.remove(e.target.parentNode.children)
    })
    approveBtn.addEventListener("click", ()=>{
      publishedPosts.appendChild(li)
      approveBtn.remove()
      editBtn.remove()
    })
  }
  document.querySelector('#clear-btn').addEventListener('click', (e) => {
    let publishedList = document.querySelector('#published-list');
    let lis = publishedList.querySelectorAll('li')
    for (let li of lis) {
        li.remove()
    }
});

  function createElement(type, text, className) {
    let el = document.createElement(type);
    el.textContent = text;
    if (className) {
      el.className = className;
    }
    return el;
  }
  function clear(){
    postTitleEl.value = ""
    postContentEl.value = ""
    postCategoryEl.value = ""
  }
}
