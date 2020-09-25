import debounce from "lodash.debounce";
function fetchArticles() {
  const apiKey = "0b94267f02e949528f5e2039825f3f98";
  let query = "javascript";

  const options = {
    headers: {
      Authorization: "0b94267f02e949528f5e2039825f3f98",
    },
  };
  const url = `http://newsapi.org/v2/everything?q=${query}&from=2020-07-13&sortBy=publishedAt&apiKey=${apiKey}`;

  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.articles);
      let title = data.articles[0].title;
      let path = data.articles[0].url;

      //   const link = createLink(path, title);
      deployElements(createLink, path, title);
    });
}
fetchArticles();

function createLink(a, b) {
  const link = document.createElement("a");
  link.setAttribute("href", a);
  link.textContent = b;
  return link;
}

const postsContainer = document.getElementById("posts");

function deployElements(cb1, a, b) {
  const el = cb1(a, b);
  postsContainer.append(el);
}
const inp = document.querySelector(".search-input");
inp.addEventListener(
  "input",
  debounce(() => {
    console.log(inp.value);
  }, 400),
);
// export default fetchArticles;
// fetch(url, options);

// const options = {
//   method: "GET", // POST, PUT || PATCH, DELETE
//   headers: {
//     Accept: "application/json",
//   },
// };

// const fetch1 = fetch(url)
//   .then((response) => {
//     response.json();
//     //response handling
//   })
//   .then((data) => {
//     console.log(data);
//     // data handling
//   })
//   .catch((error) => {
//     console.log(error);
//     // error handling
//   });

// console.log(fetch1);

// console.dir(XMLHttpRequest);

// let xhr = new XMLHttpRequest();
// console.log(xhr);

// // methods
// xhr.open("GET", url); // конфигурация запроса
// xhr.send(); // отправка запроса

// // GET - no body
// // POST - body

// xhr.onload = function () {
//   alert(`Загружено: ${xhr.status} ${xhr.response}`);
// };

// xhr.onerror = function () {
//   // происходит, только когда запрос совсем не получилось выполнить
//   alert(`Ошибка соединения`);
// };

// xhr.onprogress = function (event) {
//   // запускается периодически
//   // event.loaded - количество загруженных байт
//   // event.lengthComputable = равно true, если сервер присылает заголовок Content-Length
//   // event.total - количество байт всего (только если lengthComputable равно true)
//   alert(`Загружено ${event.loaded} из ${event.total}`);
// };
