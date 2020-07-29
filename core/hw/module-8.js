// task-1
// import images from "./gallery-items.js";

// ========= Makohin Andrii
// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   lightbox: document.querySelector(".lightbox"),
//   modal: document.querySelector(".lightbox__content"),
//   btn: document.querySelector('[data-action="close-lightbox"]'),
//   lightbox__image: document.querySelector(".lightbox__image"),
//   image: document.querySelector(".gallery__image"),
// };
// // console.dir(gallery, lightbox, btn, modal, lightbox__image);

// const createGalleryItem = ({ preview, original, description }) =>
//   `<li class="gallery__item">
// <a
//   class="gallery__link"
//   href=${original}
// >
//   <img
//     class="gallery__image"
//     src=${preview}
//     data-source=${original}
//     alt=${description}
//   />
// </a>
// </li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
// refs.image.classList.add("gallery__image");

// refs.gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   if (e.target.nodeName === "IMG") {
//     refs.lightbox.classList.add("is-open");
//     refs.lightbox__image.src = e.target.getAttribute("data-source");
//     refs.lightbox__image.alt = e.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function onClickHandlerClose(e) {
//   e.preventDefault();
//   refs.lightbox.classList.remove("is-open");
//   refs.lightbox__image.src = "";
//   refs.lightbox__image.alt = "";
//   window.removeEventListener("keyup", clickKey);
// }

// function closeLightbox(event) {
//   if (event.target === event.currentTarget) {
//     onClickHandlerClose();
//   }
// }

// function clickKey(event) {
//   if (event.code === "Escape") {
//     onClickHandlerClose();
//   }
// }

// ============= Shevchuk Peter
// import imgArray from "./gallery-items.js";

// const gallery = {
//   modalImg: document.querySelector("img.lightbox__image"),
//   listImg: document.querySelector("ul.js-gallery"),
//   modalWindowClose: document.querySelector(".js-lightbox"),
//   modalWindow: document.querySelector(".lightbox"),
//   infoPrevNext: {}, // info for button prev or next
//   button: { prev: "ArrowLeft", next: "ArrowRight", esc: "Escape" },

//   addImageGallery(prev, orig, desc) {
//     let li = document.createElement("li");
//     let link = document.createElement("a");
//     let img = document.createElement("img");

//     li.classList.add("gallery__item");
//     link.classList.add("gallery__link");
//     img.classList.add("gallery__image");

//     // link.setAttribute("href", orig);
//     img.setAttribute("src", prev);
//     img.setAttribute("data-source", orig);
//     img.setAttribute("alt", desc);

//     link.appendChild(img);
//     li.appendChild(link);

//     return li;
//   },
//   getImagesList(array) {
//     return array.map((obj) =>
//       this.addImageGallery(obj.preview, obj.original, obj.description)
//     );
//   },
//   setImageInGallery(array, list) {
//     list.append(...this.getImagesList(array));
//   },
//   modalShow(item) {
//     this.clearWindow();
//     this.modalSave(item);
//     this.modalImg.setAttribute("src", item.getAttribute("data-source"));
//     this.modalWindow.classList.add("is-open");
//   },
//   modalHide() {
//     this.modalWindow.classList.contains("is-open")
//       ? this.modalWindow.classList.remove("is-open")
//       : null;
//     this.clearWindow();
//   },
//   clearWindow() {
//     this.modalImg.setAttribute("src", "");
//     this.modalImg.setAttribute("alt", "");
//   },
//   keyDown(event) {
//     let code = event.code;
//     code === this.button.esc ? this.modalHide() : null;
//     code === this.button.prev || code === this.button.next
//       ? this.modalPrevNext(code)
//       : null;
//   },
//   modalPrevNext(item) {
//     (item === this.button.prev && this.infoPrevNext[item]) ||
//     (item === this.button.next && this.infoPrevNext[item])
//       ? this.modalShow(this.infoPrevNext[item])
//       : null;
//   },
//   modalSave(item) {
//     item = item.parentNode.parentNode;
//     item.previousSibling
//       ? (this.infoPrevNext[
//           this.button.prev
//         ] = item.previousSibling.querySelector("a").querySelector("img"))
//       : null;
//     item.nextSibling
//       ? (this.infoPrevNext[this.button.next] = item.nextSibling
//           .querySelector("a")
//           .querySelector("img"))
//       : null;
//   },
// };

// gallery.setImageInGallery(imgArray, gallery.listImg);

// gallery.listImg.addEventListener("click", (e) => {
//   gallery.modalShow(e.target);
// });

// gallery.modalWindowClose.addEventListener("click", () => {
//   gallery.modalHide();
// });

// document.addEventListener("keydown", (event) => gallery.keyDown(event));

// ==== Ivanuts
// // Імаорт масиву обєкту з картинками
// import gallery from "./gallery-items.js";

// // Отримую посилання на тег ul
// const gallaryItems = document.querySelector(".js-gallery");

// // Створюю трибути до галареї
// const photoElement = function (arr, ul) {
//   for (let elm of arr) {
//     const imgForGallary = document.createElement("img");
//     imgForGallary.classList.add("gallery__image");
//     imgForGallary.setAttribute("alt", elm.description);
//     imgForGallary.setAttribute("src", elm.preview);
//     imgForGallary.setAttribute("data-source", elm.original);

//     const imgForLink = document.createElement("a");
//     imgForLink.appendChild(imgForGallary);

//     const imgForLi = document.createElement("li");
//     imgForLi.appendChild(imgForLink);

//     ul.appendChild(imgForLi);
//   }
// };
// photoElement(gallery, gallaryItems);

// // Модельне вікно
// const lightBox = document.querySelector(".js-lightbox");
// // const lightBoxOvarlay = document.querySelector(".lightbox__overlay");
// // const lightBoxContent = document.querySelector(".lightbox__content");
// const lightBoxImg = document.querySelector(".lightbox__image");
// const lightBoxBtn = document.querySelector(".lightbox__button");

// const toShowItem = function (event) {
//   if (event.target.nodeName === "IMG") {
//     lightBox.classList.add("is-open");
//     lightBoxImg.src = event.target.getAttribute("data-source");
//   }
// };
// gallaryItems.addEventListener("click", toShowItem);

// const toCloseItem = function (event) {
//   lightBox.classList.remove("is-open");
//   lightBoxImg.src = "";
// };
// lightBoxBtn.addEventListener("click", toCloseItem);

// =========== Zdrok Vova
// import images from "./gallery-items.js";

// const galleryList = document.querySelector(".gallery");
// const openModal = document.querySelector(".lightbox");
// const closeBtn = document.querySelector(".lightbox__button");
// const imgBigSize = document.querySelector(".lightbox__image");

// const owerlay = document.querySelector(".lightbox__content");

// function getCon(descr, origSize, littSize) {
//   const itemRef = document.createElement("li");
//   itemRef.classList.add("gallery__item");

//   const linkRef = document.createElement("a");
//   linkRef.classList.add("gallery__link");

//   const imgRef = document.createElement("img");
//   imgRef.classList.add("gallery__image");

//   imgRef.setAttribute("src", littSize);
//   imgRef.setAttribute("alt", descr);
//   imgRef.setAttribute("data-source", origSize);

//   linkRef.appendChild(imgRef);
//   itemRef.appendChild(linkRef);
//   return itemRef;
// }

// const imgList = images.map((obj) =>
//   getCon(obj.description, obj.original, obj.preview)
// );

// galleryList.append(...imgList);
// let imgBSrc = "";

// const addBigImg = (event) => {
//   imgBSrc = event.target.getAttribute("data-source");
//   imgBigSize.setAttribute("src", imgBSrc);

//   return;
// };

// const removeBigImg = (event) => {
//   imgBigSize.setAttribute("src", "");

//   return;
// };

// galleryList.addEventListener("click", () => {
//   openModal.classList.add("is-open");

//   addBigImg(event);
//   window.addEventListener("keydown", onEcsPress);
// });

// closeBtn.addEventListener("click", () => {
//   openModal.classList.remove("is-open");
//   removeBigImg(event);
// });

// owerlay.addEventListener("click", (event) => {
//   if (event.target === event.currentTarget) {
//     openModal.classList.remove("is-open");
//   }
// });

// function onEcsPress(event) {
//   if (event.code === "Escape") {
//     openModal.classList.remove("is-open");
//     removeBigImg();
//     // console.log(`навантажена сторінка`);
//   }
// }

// Мар'ян

// import galleryItems from './gallery-items.js';
// import { tamplate, openModal, closeModal } from './service.js';

// const jsGallery = document.querySelector('.js-gallery');
// const closeBtn = document.querySelector('.lightbox__button');
// const overlay = document.querySelector('.lightbox__overlay');

// const galleryItemsMarkup = galleryItems.map(item => tamplate(item)).join('');
// jsGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);

// jsGallery.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// Roma Vitovych
import gallery from "../db-js/gallery-items.js";

const galleryList = document.querySelector(".js-gallery");

const lightBox = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const lightBoxBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
);
console.log(galleryList);

const generateItems = (array, place) => {
  array.map((element) => {
    const galleryItem = document.createElement("li");
    const galleryLink = document.createElement("a");
    const galleryImage = document.createElement("img");
    galleryImage.setAttribute("alt", element.description);
    galleryImage.setAttribute("src", element.preview);
    galleryImage.setAttribute("data-source", element.original);
    galleryImage.classList.add("gallery__image");
    galleryLink.classList.add("gallery__link");
    galleryItem.classList.add("gallery__item");
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    place.appendChild(galleryItem);
  });
};
generateItems(gallery, galleryList);

galleryList.addEventListener("click", openModal);
function openModal(event) {
  console.dir(event);
  console.log(event.target);
  console.log(event.target.nodeName);
  if (event.target.nodeName === "IMG") {
    lightBox.classList.add("is-open");
    // console.dir(lightBoxImage);
    lightBoxImage.src = event.target.getAttribute("data-source");
  }
  return;
}

lightBoxBtn.addEventListener("click", closeModal);
function closeModal() {
  lightBox.classList.remove("is-open");
  lightBoxImage.src = "";
}
