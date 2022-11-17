function getArticleGenerator(articles) {
  let div = document.getElementById("content");
  return function () {
    if (articles.length > 0) {
      let article = document.createElement("article");
      article.textContent = articles.shift();
      div.appendChild(article);
    }
  };
}
