// import "./module-13/cw/async-await.js";
// import "./module-14/webSockets.js";
// БАЗОВЫЕ ИМПОРТЫ
// import "./css/styles.css";
// import "./css/post-feed.css";
// import "./css/form.css";
// import newTimer from "./js/timer";
// newTimer();
// import "./js/feedback";
// import posts from "./data/posts.json";
// console.log(posts);

// import "./module-11/cw/date";
// import "./module-11/cw/promiseApi";
// import "./module-12/cw/api";
// import "./module-13/cw/theory";
import "./module-14/webSockets";
// ИМПОРТЫ ПО МОДУЛЯМ
// 13 - HW
// import "./module-10/hw/module-10";
// import "./module-11/hw/switchColor";
// import "./module-11/hw/promisification";
// import "./module-11/hw/timer";
// import "./module-12/hw/module-12";
// import "./module-13/hw/module-13";
// import './basicLightbox.min.css';
// import './basicLightbox.min.js';

// // 12 - PRACTICE
// import "./module-12/cw/articles.css";
// import "./module-12/cw/spinner.css";
// import reflowArticles from "./module-12/cw/reflowArticles";
// import refs from "./module-12/cw/refs.js";
// import newsService from "./module-12/cw/news-services";

// refs.searchForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const form = e.currentTarget;
//   newsService.query = form.elements.query.value;
//   refs.ul.innerHTML = "";

//   newsService.resetPage();

//   toShowSpinner();
//   form.reset();
// });

// refs.loadMoreBtn.addEventListener("click", toShowSpinner);

// function toShowSpinner() {
//   refs.loadMoreBtn.classList.add("is-hidden");
//   refs.spinner.classList.remove("is-hidden");

//   newsService
//     .fetchArticles()
//     .then((articles) => {
//       reflowArticles(articles);
//       refs.loadMoreBtn.classList.remove("is-hidden");

//       window.scrollTo({
//         top: document.documentElement.offsetHeight,
//         behavior: "smooth",
//       });
//     })
//     .finally(() => {
//       refs.spinner.classList.add("is-hidden");
//     });
// }

// 12 - HOMEWORK
// TEMPLATES

// если вынести в отдельный модуль, то:

// fetchArticles.js

// index.js

// module 7
// получаем доступ с тегу ul, в который будем встраивать сгенерированные элементы
// const refs = {
//   postFeed: document.querySelector(".post-feed"),
// };
// console.log(refs);
// // 1 Создаем разметку из шаблона списка
// import listItemsTemplate from "./templates/list-items.hbs";
// const markup = listItemsTemplate(posts);
// console.log(markup);
// refs.postFeed.insertAdjacentHTML("beforeend", markup);
// ||
// import postFeedItemTemplate from "./templates/post-feed-item.hbs";
// 2 Создаем разметку из шаблона элемента списка
// buildPostFeed(posts);
// function buildPostFeed(posts) {
//   const markup = posts.map((post) => postFeedItemTemplate(post)).join("");
//   refs.postFeed.insertAdjacentHTML("beforeend", markup);
// }
// TEMPLATES
// JSON
// const person = {
//   firstname: "Aleksa",
//   lastname: "Hrevtsova",
//   phone: "+380500715330",
//   city: "Kiev",
//   age: 30,
//   bonus: 10000000,
//   prev: ["car", "house", "plane"],
// };
// console.log("name: " + person.firstname);

// преобразование объекта в строку
// let personData = JSON.stringify(person);
// console.log(personData);
// console.log(typeof personData); // string

// преобразование строки в объект
// const newPerson = JSON.parse(personData);
// console.log(newPerson);
// console.log(typeof newPerson); // object

// setTimeout() - метод задающий отсрочку вызова функции

// // setInterval() - метод, устанавливающий интервальный повтор вызова функции
// let subscriptionCounter = 0;
// // функция, выводящая 5 сообщений с интервалом в 1с
// const intervalId = setInterval(() => {
//   // условие проверки выполнения вызова функции
//   if (subscriptionCounter === 5) {
//     console.log("Stop interval");
//     // остановка интервала вызова функции
//     clearInterval(intervalId);
//     return;
//   }
//   subscriptionCounter += 1;
//   console.log("Сообщение: ", subscriptionCounter);
// }, 1000);

// // TIMER
// // получаем доступ в элементам разметки таймера
// const timerRefs = {
//   clockface: document.querySelector(".clockface"),
//   startBtn: document.querySelector(`button[data-action="start"]`),
//   stopBtn: document.querySelector(`button[data-action="stop"]`),
// };
// // создаем функцию преобразования времени в двузначный вид
// function pad(value) {
//   return String(value).padStart(2, "0");
// }
// // функция отрисовки текущего значения таймера
// function updateClockface(time) {
//   //   const date = new Date(time);
//   //   console.log(date);

//   //   const hours = pad(date.getUTCHours());
//   //   const mins = pad(date.getMinutes());
//   //   const secs = pad(date.getSeconds());

//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   timerRefs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
// // класс таймера, работающего 24 часа
// const timer = {
//   // флаг с начальным значением
//   isActive: false,
//   // метод запуска таймера
//   start() {
//     // проверка активности таймера перед запуском
//     // если он уже запущен, то новый не запустится
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     const startTime = Date.now();

//     this.timerId = setInterval(() => {
//       const currentTime = Date.now();
//       this.deltaTime = currentTime - startTime;

//       updateClockface(this.deltaTime);
//     }, 1000);
//   },
//   //   метод отсановки таймера
//   stop() {
//     clearInterval(this.timerId);
//     this.isActive = false;
//     this.deltaTime = 0;
//     updateClockface(this.deltaTime);
//   },
// };
// // вешаем слушателей событий и обработчики по клику на кнопки
// timerRefs.startBtn.addEventListener("click", timer.start.bind(timer));
// timerRefs.stopBtn.addEventListener("click", timer.stop.bind(timer));
