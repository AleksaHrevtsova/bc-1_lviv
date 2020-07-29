import articleTpl from "./article.hbs";
import refs from "./refs";

// функция отрисовки
function reflowArticles(articles) {
  const markup = articleTpl(articles);
  refs.ul.insertAdjacentHTML("beforeend", markup);
}
export default reflowArticles;
