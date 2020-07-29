// "use strict";
// // task-1
// // Напиши скрипт, який виконає наступні операції.
// // Порахує і виведе в консоль кількість категорій в ul#categories,
// // тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// // Для кожного елемента li.item в списку ul#categories, знайде і виведе
// // в консоль текст заголовка елемента (тега h2) і
// // кількість елементів в категорії (всіх вкладених в нього елементів li).
// // Наприклад, для першої категорії вийде:
// // Категорія: Тварини
// // Кількість елементів: 4

// const totalCategories = document.querySelectorAll(".item");
// console.log(`У списку ${totalCategories.length} категорії.`);

// const categoriesArray = [...totalCategories]
//   .map(
//     (categories) => `Категорія: ${categories.children[0].textContent}
// Кількість елементів: ${categories.children[1].children.length}`
//   )
//   .join("\n");

// console.log(categoriesArray);

// // task-2
// // Напиши скрипт, який для кожного елемента масиву ingredients створить
// // окремий li, після чого вставить всі li за одну операцію в список
// // ul.ingredients.
// // Для створення DOM-вузлів використовуй document.createElement().

// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// let ulList = document.getElementById("ingredients");
// const foodIngredients = ingredients.forEach((ingredient) => {
//   let items = document.createElement("li");
//   items.innerHTML = ingredient;
//   ulList.append(items);
//   items.setAttribute("style", "list-style-type:decimal;");
// });

// console.log(ulList);

// // task-3
// // Напиши скрипт для створення галереї зображень по масиву даних.

// // В HTML є список ul#gallery.

// // <ul id="gallery"></ul>
// // Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// // Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// // Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const createGalleryItem = ({ url, alt }) =>
//   `<li style = margin:10px;><img style = border-radius:50%;  src = '${url}' alt = '${alt}' width = 200 height = 200 ></li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList = document.querySelector("#gallery");
// galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
// galleryList.setAttribute("style", "list-style-type:none; display:flex;");

// console.log(galleryList);

// // task-4
// // Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// // Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// // Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// // Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

// const style = document.querySelector("#counter");
// style.setAttribute("style", "margin:20px");

// const button = {
//   sub: document.querySelector(`[data-action = 'increment']`),
//   add: document.querySelector(`[data-action = 'decrement']`),
//   span: document.querySelector("#value"),
// };

// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;

//   button.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;

//   button.span.textContent = counterValue;
// };

// button.sub.addEventListener("click", increment);
// button.add.addEventListener("click", decrement);

// console.log(button);

// // task-5
// // Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output.
// // якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//   if (input.value === "") {
//     nameOutput.innerHTML = "незнайомець";
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };

// console.log(input, nameOutput);

// // // task-6
// // Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну
// // кількість символів.

// // <input
// //   type="text"
// //   id="validation-input"
// //   data-length="6"
// //   placeholder="Введи 6 символів"
// // />
// // Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// // Якщо введена відповідна кількість, то border інпут стає зеленим,
// // якщо неправильне - червоним.
// // Для додавання стилів, використовуй CSS-класи valid і invalid.

// let inputVal = document.getElementById("validation-input");

// let totalLenght = inputVal.getAttribute("data-length");
// let inTotalLenght = parseInt(totalLenght, 10);

// inputVal.onchange = function () {
//   if (inputVal.value.length === inTotalLenght) {
//     inputVal.classList.remove("invalid");
//     inputVal.classList.add("valid");
//   }
//   if (inputVal.value.length === 0) {
//     inputVal.classList.remove("valid");
//     inputVal.classList.remove("invalid");
//   }
//   if (inputVal.value.length !== inTotalLenght && inputVal.value.lenght !== 0) {
//     inputVal.classList.add("invalid");
//   }
// };

// console.dir(inputVal);

// // task-7
// // Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size.
// // В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

// let controlFont = document.getElementById("font-size-control");
// controlFont.setAttribute("style", "margin:20px; display:flex;");

// let text = document.getElementById("text");

// controlFont.oninput = function () {
//   text.style.fontSize = controlFont.value + "px";
// };

// console.log(controlFont, text);

// // task-8
// // Напиши скрипт створення і очищення колекції елементів.
// // Користувач вводить кількість елементів в input і натискає кнопку Створити,
// // після чого рендериться колекція. При натисканні на кнопку Очистити,
// // колекція елементів очищається.

// // Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число.
// // Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// // Кожен створений div:

// // Має випадковий rgb колір фону
// // Розміри найпершого div - 30px на 30px
// // Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// // Створи функцію destroyBoxes(), яка очищає div#boxes.

// let render = document.querySelector(`[data-action = 'render']`);
// let destroy = document.querySelector(`[data-action = 'destroy']`);
// let boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   let amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   let basicSize = 30;
//   let fragment = document.createDocumentFragment();
//   for (let item = 0; item < amount; item++) {
//     let size = basicSize + item * 10;
//     let div = document.createElement("div");
//     div.innerHTML = amount;
//     div.setAttribute(
//       "style",
//       ` width: ${size}px; height: ${size}px; background-color:  rgb(${random()},${random()},${random()})`
//     );
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }

// 1

// let list = document.querySelector("#categories");

// console.log(`У списку ${list.children.length} категорії.`);

// for (const item of list.children) {
//   console.log(`Категорія: ${item.querySelector("h2").textContent}`);
//   console.log(
//     `Кількість елементів: ${item.querySelector("ul").children.length}`
//   );
// }

// 2
// let list = document.querySelector("#ingredients");

// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// function createLi(text) {
//   let li = document.createElement("li");
//   li.textContent = text;

//   return li;
// }

// let menuList = ingredients.map((item) => createLi(item));
// list.append(...menuList);

// 3
// let list = document.querySelector("#gallery");

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// function addImage(src, alt) {
//   let li = document.createElement("li");
//   let img = document.createElement("img");

//   img.setAttribute("src", src);
//   img.setAttribute("alt", alt);
//   img.classList.add("images");
//   li.append(img);
//   return li;
// }

// let listImg = images.map((obj) => addImage(obj.url, obj.alt));
// list.append(...listImg);

// 4
// let value = document.querySelector("#value");
// const btnAdd = document.querySelector('[data-action="increment"]');
// const btnRemove = document.querySelector('[data-action="decrement"]');

// let numb = Number(value.textContent);

// btnAdd.addEventListener("click", increment);
// btnRemove.addEventListener("click", decrement);

// function increment(event) {
//   numb += 1;
//   value.textContent = numb;
// }

// function decrement(event) {
//   if (numb > 0) {
//     numb -= 1;
//     value.textContent = numb;
//   }
// }

// 5
// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", (value) => {
//   nameOutput.textContent = value.target.value;
// });

// 6
// const input = document.querySelector("#validation-input");

// const currentLength = Number(input.getAttribute("data-length"));

// input.addEventListener("blur", (val) => {
//   if (val.target.value.length === currentLength) {
//     input.classList.contains("invalid")
//       ? input.classList.remove("invalid")
//       : null;
//     input.classList.add("valid");
//   } else {
//     input.classList.contains("valid") ? input.classList.remove("valid") : null;
//     input.classList.add("invalid");
//   }
// });

// 7
// const input = document.querySelector("#font-size-control");
// const inputText = document.querySelector("#text");

// input.addEventListener("input", (val) => {
//   inputText.style.fontSize = val.target.value + "px";
// });

// // 8
// let list = document.querySelector("#boxes");
// let btnAdd = document.querySelector("#controls [data-action='render']");
// let btnClear = document.querySelector("#controls [data-action='destroy']");
// let inputCount = document.querySelector("#controls [type='number']");
// let div = "";
// let divWidthHeigth = 30;
// let maxColor = 256;

// const getBgColor = () => {
//   let red = Math.floor(Math.random() * Math.floor(maxColor));
//   let green = Math.floor(Math.random() * Math.floor(maxColor));
//   let blue = Math.floor(Math.random() * Math.floor(maxColor));

//   return `rgb(${red}, ${green}, ${blue})`;
// };

// btnAdd.addEventListener("click", () => {
//   let amount = inputCount.value;

//   for (let i = 0; i < amount; i++) {
//     div = document.createElement("div");
//     div.style.width = divWidthHeigth + "px";
//     div.style.height = divWidthHeigth + "px";
//     // div.textContent = `${div.style.width} x ${divWidthHeigth}`;
//     div.style.backgroundColor = getBgColor();
//     divWidthHeigth += 10;
//     list.appendChild(div);
//   }
// });

// btnClear.addEventListener("click", () => {
//   list.innerHTML = "";
//   divWidthHeigth = 30;
// });

// const createBoxes = () => {
//   let amount = document.querySelector("#controls [type='number']").value;
//   for (let i = 0; i < amount; i++) {
//     div = document.createElement("div");
//     div.textContent = `Div number ${i + 1}`;
//     list.appendChild(div);
//   }
// };

// createBoxes(5);

// console.log(input.value);

// // TASK01

// const categories = document.querySelector("#categories");
// console.log(`У списку ${categories.children.length} категориї.`);

// categories.querySelectorAll(".item").forEach((item) => {
//   console.log(`Категорія: ${item.querySelector("h2").textContent}`);
//   console.log(
//     `Кількфсть елементів: ${item.querySelector("ul").children.length}`
//   );
// });

// // TASK02
// // const ul = document.querySelector("#ingredients");
// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// const allLi = ingredients.map((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   document.querySelector("#ingredients").appendChild(li);
//   // return li;
// });
// // document.querySelector("#ingredients").prepend(...allLi);

// // TASK03

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// let mark = ``;
// images.forEach(
//   (image) =>
//     (mark += `<li><img src="${image.url}" alt="${image.alt}" height="100px"/></li>`)
// );
// document.querySelector("#gallery").insertAdjacentHTML("beforeend", mark);

// // TASK04

// let counterValue = 0;

// function increment() {
//   counterValue += 1;
//   document.querySelector("#value").textContent = counterValue;
// }

// function decrement() {
//   counterValue -= 1;
//   document.querySelector("#value").textContent = counterValue;
// }

// const incrementBtn = document.querySelector(
//   '#counter button[data-action="increment"]'
// );
// const decrementBtn = document.querySelector(
//   '#counter button[data-action="decrement"]'
// );

// incrementBtn.addEventListener("click", increment);
// decrementBtn.addEventListener("click", decrement);

// // TASK05

// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// function inputChange(event) {
//   nameInput.value
//     ? (nameOutput.textContent = event.currentTarget.value)
//     : (nameOutput.textContent = "незнайомець");
// }

// nameInput.addEventListener("input", inputChange);

// // TASK06

// const validationInput = document.querySelector("#validation-input");

// function validationInputBlur() {
//   if (validationInput.value.length === 6) {
//     validationInput.classList.add("valid");
//     validationInput.classList.remove("invalid");
//   } else {
//     validationInput.classList.add("invalid");
//     validationInput.classList.remove("valid");
//   }
// }

// validationInput.addEventListener("blur", validationInputBlur);

// // TASK07

// const fontSizeControl = document.querySelector("#font-size-control");
// const text = document.querySelector("#text");

// console.log(fontSizeControl.value);

// function fontSizeChange() {
//   text.setAttribute("style", `font-size: ${fontSizeControl.value}px`);
// }

// fontSizeControl.addEventListener("input", fontSizeChange);

// 1
// const countCategories = document.getElementsByClassName("item");

// const nameCategories = function (colection) {
//   for (let elem of colection) {
//     console.log(elem.children[0].textContent);
//     console.log(elem.children[1].children.length);
//   }
//   return;
// };
// nameCategories(countCategories);

// // 2
// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// const ingredientsList = document.querySelector("#ingredients");
// const generateItems = function (arr) {
//   for (let elem of arr) {
//     const item = document.createElement("li");
//     item.textContent = elem;
//     ingredientsList.appendChild(item);
//   }
//   return;
// };
// generateItems(ingredients);

// // 3
// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryItems = document.querySelector("#gallery");

// const generateItem = function (arr) {
//   for (let elem of arr) {
//     const imgForGallery = document.createElement("img");
//     imgForGallery.alt = elem.alt;
//     imgForGallery.src = elem.url;
//     imgForGallery.width = "200";
//     const galleryItem = document.createElement("li");
//     galleryItem.appendChild(imgForGallery);
//     galleryItems.appendChild(galleryItem);
//   }
// };
// generateItem(images);

// // 4
// const counterValue = document.querySelector("#value");
// const addBtn = document.querySelector('[data-action="increment"]');
// const remBtn = document.querySelector('[data-action="decrement"]');

// let numb = Number(value.textContent);

// addBtn.addEventListener("click", increment);
// remBtn.addEventListener("click", decrement);

// function increment(event) {
//   numb += 1;
//   value.textContent = numb;
// }
// function decrement(event) {
//   if (numb > 0) {
//     numb -= 1;
//     value.textContent = numb;
//   }
// }

// 5

// const input = document.getElementById("name-input");

// input.addEventListener("input", () => {
//   span.textContent = input.value;
// });

// const span = document.getElementById("name-output");

// 6
// const input = document.getElementById("validation-input");

// input.classList.add("invalid");

// input.onchange = function () {
//   let inputValue = input.value;
//   if (inputValue.length == 6) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   }
// };

// const validInput = function () {
//   let inputValue = input.value;

//   if (inputValue.length == 6) {
//     input.classList.add("valid");
//     input.classList.remove("invalid");
//   }
// };

// input.addEventListener("blur", validInput);

// // 7
// const input = document.getElementById("font-size-control");
// let span = document.getElementById("text");

// input.addEventListener("input", (e) => {
//   span.style.fontSize = input.value + "px";
// });

// input.oninput = function () {
//   span.style.fontSize = input.value + "px";
// };

// const countCategories = document.getElementsByClassName("item");

// const nameCategories = function (colection) {
//   for (let elem of colection) {
//     console.log(elem.children[0].textContent);
//     console.log(elem.children[1].children.length);
//   }
//   return;
// };
// nameCategories(countCategories);

// const ingredients = [
//   "Картопля",
//   "Гриби",
//   "Часник",
//   "Помідори",
//   "Зелень",
//   "Приправи",
// ];

// const ingredientsList = document.querySelector("#ingredients");
// const generateItems = function (arr) {
//   for (let elem of arr) {
//     const item = document.createElement("li");
//     item.textContent = elem;
//     ingredientsList.appendChild(item);
//   }
//   return;
// };
// generateItems(ingredients);

// const images = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const galleryItems = document.querySelector("#gallery");

// const generateItem = function (arr) {
//   for (let elem of arr) {
//     const imgForGallery = document.createElement("img");
//     imgForGallery.alt = elem.alt;
//     imgForGallery.src = elem.url;
//     imgForGallery.width = "200";
//     const galleryItem = document.createElement("li");
//     galleryItem.appendChild(imgForGallery);
//     galleryItems.appendChild(galleryItem);
//   }
// };
// generateItem(images);

// const counterValue = document.querySelector("#value");
// const addBtn = document.querySelector('[data-action="increment"]');
// const remBtn = document.querySelector('[data-action="decrement"]');

// let numb = Number(value.textContent);

// addBtn.addEventListener("click", increment);
// remBtn.addEventListener("click", decrement);

// function increment(event) {
//   numb += 1;
//   value.textContent = numb;
// }
// function decrement(event) {
//   if (numb > 0) {
//     numb -= 1;
//     value.textContent = numb;
//   }
// }

// const input = document.getElementById("name-input");

// input.addEventListener("input", () => {
//   span.textContent = input.value;
// });

// const span = document.getElementById("name-output");

// const input1 = document.getElementById("validation-input");

// input1.onchange = function () {
//   input1.classList.add("invalid");
//   let inputValue = input1.value;
//   if (inputValue.length == 6) {
//     input1.classList.add("valid");
//     input1.classList.remove("invalid");
//   }
// };
// const input2 = document.getElementById("font-size-control");
// let span2 = document.getElementById("text");

// input2.addEventListener("input", (e) => {
//   span2.style.fontSize = input2.value + "px";
// });
