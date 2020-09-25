// // ================== Makohin Andrii =================== //
// import "./styles/style.css";
// import servise from "./js/apiService.js";
// import cardImeges from "./templates/template.hbs";
// import refs from "./js/refs.js";
// import * as basicLightbox from "basiclightbox";
// import "basiclightbox/dist/basicLightbox.min.css";

// refs.searchForm.addEventListener("submit", imageSearchInputHandler);
// refs.loadMoreBtn.addEventListener("click", loadMoreBtnHandler);
// refs.gallery.addEventListener("click", openImg);
// refs.loadMoreBtn.classList.add("hidden");

// function openImg(event) {
//   if (event.target.nodeName === "IMG") {
//     const light = basicLightbox.create(
//       `<img src="${event.target.dataset.source}" /> `,
//     );

//     light.show();
//   }
// }

// function imageSearchInputHandler(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const input = form.elements.query;

//   clearListItems();

//   servise.resetPage();

//   servise.searchQuerry = input.value;

//   servise.fetcArticles().then((hits) => {
//     updateMarkup(hits);
//   });
//   input.value = "";
// }

// function loadMoreBtnHandler() {
//   servise.fetcArticles().then((hits) => {
//     updateMarkup(hits);
//     window.scrollTo(0, 100);

//     window.scrollTo({
//       top: 999999,
//       behavior: "smooth",
//     });
//   });
// }

// function updateMarkup(hits) {
//   refs.loadMoreBtn.classList.remove("hidden");
//   const markup = buildListItemsTemplate(hits);
//   iserListItems(markup);
// }

// function iserListItems(items) {
//   refs.gallery.insertAdjacentHTML("beforeend", items);
// }

// function buildListItemsTemplate(items) {
//   return cardImeges(items);
// }

// function clearListItems() {
//   refs.gallery.innerHTML = "";
// }
// // ================== Makohin Andrii =================== //

// // ================== Musyka Marian =================== //
// // пошук працює на load more
// import "./styles/style.css";

// import apiService from "./js/apiService";
// import renderGallery from "./js/renderGallery";
// import openModal from "./js/modal";
// import InfiniteScroll from "infinite-scroll";

// const form = document.querySelector("#search-form");
// const gallery = document.querySelector(".gallery");

// // button
// const loadMoreBtn = document.querySelector('button[data-action="load-more"]');
// loadMoreBtn.addEventListener("click", () => {
//   apiService.getImages().then((pics) => {
//     console.log(pics);
//     renderGallery(pics);
//     window.scrollTo({
//       top: document.documentElement.offsetHeight,
//       behavior: "smooth",
//     });
//   });
// });

// gallery.addEventListener("click", openModal);

// //infinite-scroll//
// //const infScroll = new InfiniteScroll(gallery, {
// //    responseType: 'text',
// //    history: false,
// //    path: function () {
// //       return `https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${apiService.query}&page=${apiService.page}&per_page=12&key=${apiService.apiKey}`;
// //   },
// //});

// //infScroll.on('load', response => {
// //   const result = JSON.parse(response);

// //    renderGallery(result.hits);
// //   apiService.incrPage();
// //});
// //===//

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   apiService.query = form.elements.query.value;

//   gallery.innerHTML = "";
//   form.reset();

//   apiService.resetPage();
//   //   apiServiceinfScroll.loadNextPage(); // infinite-scroll
//   loadMoreBtn.style.display = "block"; // button
// });
// // ================== Musyka Marian =================== //

// // ================== Shevchuk Peter =================== //
// // styles
// import "./styles/style.css";
// import "./styles/modalstyles.css";

// //templates
// import toGenerateGallery from "./templates/postGallery.hbs";
// import toGenerateListGallery from "./templates/listGallery.hbs";

// //lodash.debounce
// import debounce from "lodash.debounce";

// //pnotify
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/PNotify.css";
// import { alert } from "@pnotify/core";

// //modal window
// const basicLightbox = require("basiclightbox");

// const myKey = "17613343-1ae46d7f2f6b0249714d12d11";

// class Search {
//   constructor() {
//     // search
//     this.input = document.querySelector("#search-form input");

//     //gallery
//     this.galleryShow = document.querySelector(".photo-card");
//     this.listGallery = document.querySelector("#galleryList");
//     this.gallery = document.querySelector(".gallery");
//     this.loadMoreBtn = document.querySelector(".loadMore");
//     console.log(this.listGallery);
//     //options
//     this.url = `https://pixabay.com/api/?key=${myKey}&image_type=photo&pretty=true&per_page=12`;
//     this.page = 1;

//     //others
//     this.data = [{}];
//     this.chart = /[0-9\s\+\-\а-я\і\ї\є]|\./;
//     this.messageText = [
//       "Використано заборонені символи! Тільки англійські символи!",
//       "Більше немає картинок",
//       "За вашим запитом не було нічого не знайдено",
//     ];
//   }
//   getData(e) {
//     this.value = this.input.value;
//     if (this.check(this.value)) {
//       return;
//     }
//     if (e) {
//       this.page = e;
//     } else {
//       this.clearGallery();
//     }
//     this.options = "&q=" + this.value + "&page=" + this.page;
//     fetch(this.url + this.options)
//       .then((response) => response.json())
//       .then((data) => this.result(data.hits))
//       .catch((error) => this.message(error));
//   }
//   check(value) {
//     if (this.chart.test(value)) {
//       this.message(0);
//       this.clearGallery();
//       return true;
//     } else if (value === "") {
//       return true;
//     }
//     return false;
//   }
//   result(data) {
//     if (String(data) === "" && this.page > 1) {
//       this.message(1);
//       this.page = 1;
//       return;
//     } else if (String(data) === "") {
//       this.message(2);
//       return;
//     }
//     this.data = this.data.concat(data);
//     this.listGallery.insertAdjacentHTML(
//       "beforeend",
//       toGenerateListGallery(data),
//     );
//     if (data.length > 2) {
//       this.loadMoreBtn.style.display = "block";
//     }
//   }
//   loadMore() {
//     this.page = this.page + 1;
//     this.getData(this.page);
//   }
//   modalShow(e) {
//     this.objImg = this.data.find((item) => item.id === Number(e));
//     basicLightbox
//       .create(
//         `<img class="lightbox__image" src="${this.objImg.largeImageURL}" alt="${this.objImg.tags}" />`,
//         { onClose: () => this.scroll("hide") },
//       )
//       .show();
//     this.scroll("show");
//   }
//   scroll(value) {
//     value === "hide"
//       ? (document.body.style.overflow = "auto")
//       : (document.body.style.overflow = "hidden");
//   }
//   clearWindow() {
//     this.modalImg.setAttribute("src", "");
//     this.modalImg.setAttribute("alt", "");
//   }
//   clearGallery() {
//     this.listGallery.innerHTML = "";
//     this.loadMoreBtn.style.display = "none";
//     this.data = [{}];
//   }
//   message(item, title = "Увага!", type = "error") {
//     const notice = alert({
//       title: title,
//       text: this.messageText[item],
//       type: type,
//       delay: 2500,
//       // hide: false,
//     });
//     notice.on("pnotify:confirm");
//     notice.on("pnotify:cancel");
//   }
//   init() {
//     this.input.addEventListener(
//       "input",
//       debounce(() => {
//         this.getData();
//       }, 500),
//     );
//     this.loadMoreBtn.addEventListener("click", () => {
//       this.loadMore();
//     });
//     document.addEventListener("click", function (e) {
//       if (e.target.parentNode.classList.value === "photo-card") {
//         search.modalShow(e.target.parentNode.getAttribute("data-id"));
//       }
//     });
//   }
// }

// const search = new Search();
// search.init();

// // var elem = document.querySelector('body');
// // var infScroll = new InfiniteScroll( elem, {
// //   // options
// //   path: '.pagination__next',
// //   append: '.post',
// //   history: false,
// // });
// // ================== Shevchuk Peter =================== //

// // ==================== Zdrok Vova ==================== //
// import "./styles/style.css";
// import debounce from "lodash.debounce";
// import apiService from "./js/apiService.js";
// import updateArticlesMarkup from "./js/update-articles-markup.js";
// import refs from "./js/refs";
// console.log(refs.searchInput);

// import * as basicLightbox from "basiclightbox";
// import "basiclightbox/dist/basicLightbox.min.css";

// refs.articlesContainer.addEventListener("click", onePage);

// function onePage(event) {
//   if (event.target.nodeName === "IMG") {
//     const instance = basicLightbox.create(
//       `<img   src="${event.target.dataset.source}" /> `,
//     );

//     instance.show();
//   }
// }
// refs.searchForm.addEventListener(
//   "input",
//   debounce(() => {
//     setUrl();
//   }, 550),
// );

// function setUrl() {
//   apiService.query = refs.searchInput.value;
//   apiService.resetPage();
//   refs.loadMoreBtn.classList.add("is-hidden");
//   refs.articlesContainer.innerHTML = "";
//   apiService.fetchArticles().then((hits) => {
//     updateArticlesMarkup(hits);
//     refs.loadMoreBtn.classList.remove("is-hidden");
//     window.scrollTo({
//       top: document.documentElement.offsetHeight,
//       behavior: "smooth",
//     });
//   });
// }

// refs.loadMoreBtn.addEventListener("click", () => {
//   apiService.fetchArticles().then((hits) => {
//     updateArticlesMarkup(hits);
//   });
// });
// // ==================== Zdrok Vova ==================== //

// ==================== Petrovskii Andrii ==================== //
import "./styles/style.css";
import "./js/apiService.js";
import getData from "./js/apiService.js";
import template from "./templates/template.hbs";

const refs = {
  form: document.querySelector(".search-form"),
  list: document.querySelector(".gallery"),
  button: document.querySelector(".load__more"),
};

refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  refs.list.innerHTML = "";
  getData.resetPage();
  let input = event.currentTarget.elements.query.value;
  getData.query = input;
  getData.fetchMetod().then((hits) => {
    const markup = template(hits);
    refs.list.insertAdjacentHTML("beforeend", markup);
    refs.button.classList.remove("is__hiden");
  });
});

refs.button.addEventListener("click", () => {
  getData.fetchMetod().then((hits) => {
    const markup = template(hits);
    refs.list.insertAdjacentHTML("beforeend", markup);
  });
});
// ==================== Petrovskii Andrii ==================== //

// ===========================================================
// import "./style.css";
// import "./apiService.js";
// import getData from "./apiService.js";
// import template from "./template.hbs";

// const refs = {
//   form: document.querySelector(".search-form"),
//   list: document.querySelector(".gallery"),
//   button: document.querySelector(".load_more"),
// };

// refs.form.addEventListener("submit", (event) => {
//   // тормозим отправку формы до внесения запроса в инпут
//   event.preventDefault();
//   // очищаем список элементов
//   refs.list.innerHTML = "";
//   // пресетим страницу
//   getData.resetPage();
//   // записываем значение поиска из инпута
//   let input = event.currentTarget.elements.query.value;
//   // записываем значение из инпута в свойство запроса
//   getData.query = input;

//   // getData.queryValue(input);
//   getData.fetchMethod().then((hits) => {
//     refs.button.classList.remove("is_hiden");
//     const markup = template(hits);
//     refs.list.insertAdjacentHTML("afterbegin", markup);
//   });
// });

// refs.button.addEventListener("click", () => {
//   getData.fetchMethod().then((hits) => {
//     const markup = template(hits);
//     refs.list.insertAdjacentHTML("afterbegin", markup);
//   });
// });
