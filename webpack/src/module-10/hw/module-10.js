// import "./style.css";
// import templatesItems from "./template.hbs";
// import menuItems from "./menu.json";

// const listItemsRef = document.querySelector(".js-menu");
// const switchThemeRef = document.querySelector(".js-switch-input");
// const bodyRef = document.querySelector("body");

// const markup = templatesItems(menuItems);

// listItemsRef.insertAdjacentHTML("afterbegin", markup);
// switchThemeRef.addEventListener("click", switcher);

// function switcher() {
//   if (event.target.checked) {
//     bodyRef.classList.add("dark-theme");
//   } else {
//     bodyRef.classList.remove("dark-theme");
//   }
// }

// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme",
// };

// localStorage.setItem("theme", JSON.stringify(Theme));

// // =================== Ivanuts Vova =========================== //
// import "./style.css";

// import postsDb from "./menu.json";
// const postsListRef = document.querySelector(".js-menu");
// // Створюємо галарею постів по одному елементу

// import toGeneratePost from "./template.hbs";
// const newPost = toGeneratePost(postsDb);
// postsListRef.insertAdjacentHTML("beforeend", newPost);

// //............................Перемикач Світла............................//

// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme",
// };

// const bodySwitch = document.querySelector("body");
// const inputSwitch = document.querySelector(".js-switch-input");
// inputSwitch.addEventListener("change", () => {
//   inputSwitch.checked
//     ? (localStorage.setItem("colorTheme", " "),
//       bodySwitch.classList.add(Theme.DARK),
//       bodySwitch.classList.remove(Theme.LIGHT))
//     : (localStorage.removeItem("colorTheme"),
//       bodySwitch.classList.add(Theme.LIGHT),
//       bodySwitch.classList.remove(Theme.DARK));
// });

// if (localStorage.getItem("colorTheme")) {
//   bodySwitch.classList.add(Theme.DARK);
//   inputSwitch.checked = true;
// }

// ======================= Muzyka Marian ========================== //
import "./style.css";
import menu from "./menu.json";
import itemTemplate from "./template.hbs";

const newItem = itemTemplate(menu);
const menuList = document.querySelector(".js-menu");
menuList.insertAdjacentHTML("afterbegin", newItem);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const main = document.querySelector("body");
const mainSwitch = document.querySelector(".js-switch-input");
mainSwitch.addEventListener("change", () => {
  console.dir(mainSwitch);
  mainSwitch.checked
    ? (localStorage.setItem("changeTheme", " "),
      main.classList.add(Theme.DARK),
      main.classList.remove(Theme.LIGHT))
    : (localStorage.removeItem("changeTheme"),
      main.classList.add(Theme.LIGHT),
      main.classList.remove(Theme.DARK));
});

if (localStorage.getItem("changeTheme")) {
  main.classList.add(Theme.DARK);
  mainSwitch.checked = true;
}
