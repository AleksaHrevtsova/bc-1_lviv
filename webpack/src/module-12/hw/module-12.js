// // ============= Ivanuts ========================= //
// import debounce from "lodash.debounce";
// import "./styles/styles.css";
// import getCountries from "./js/getCountries.js";
// import getCountriesSQ from "./js/getCountriesSQ.js";

// const refs = {
//   form: document.querySelector(".serch__form"),
//   input: document.querySelector(".serch__input"),
//   ul: document.querySelector(".countries"),
// };

// refs.input.addEventListener(
//   "input",
//   debounce(() => {
//     setUrl();
//   }, 500),
// );

// function setUrl() {
//   let inputValue = refs.input.value;

//   if (inputValue === "") {
//     return;
//   }
//   refs.ul.innerHTML = "";
//   getCountries(inputValue).then(getCountriesSQ);
// }
// // ============= Ivanuts ========================= //

// // ============= Makohin ========================= //
// import "./js/country";
// import "./styles/styles.css";
// // ============= Makohin ========================= //

// // ============= Shevchuk ========================= //
// // styles
// import "./styles/styles.css";

// //templates
// import toGenerateCountry from "./templates/postCountry.hbs";
// import toGenerateListCountry from "./templates/listCountry.hbs";

// //lodash.debounce
// import debounce from "lodash.debounce";

// //pnotify
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/PNotify.css";
// import { alert } from "@pnotify/core";

// class Country {
//   constructor() {
//     this.URL = "https://restcountries.eu/rest/v2/name/";
//     this.input = document.querySelector("#country input");
//     this.listCountry = document.querySelector("#countryList");
//     this.country = document.querySelector("#results");
//     this.chart = "qwertyuiopasdfghjklzxcvbnm";
//   }
//   getData() {
//     this.value = this.input.value;
//     if (this.check(this.value)) {
//       return;
//     }
//     fetch(this.URL + this.value)
//       .then((response) => response.json())
//       .then((data) => {
//         this.result(data);
//         this.data = data;
//       })
//       .catch((error) => console.log(error));
//   }
//   getCoutry(code) {
//     this.result([this.data.find((item) => item.alpha3Code === code)]);
//   }
//   result(data) {
//     this.clear();
//     if (!data.length) {
//       this.clear();
//     } else if (data.length > 1 && data.length <= 10) {
//       this.listCountry.innerHTML = toGenerateListCountry(data);
//     } else if (data.length > 10) {
//       this.message("Введіть більше символів!");
//     } else {
//       this.country.innerHTML = toGenerateCountry(data[0]);
//     }
//   }
//   clear() {
//     this.listCountry.innerHTML = "";
//     this.country.innerHTML = "";
//   }
//   init() {
//     this.input.addEventListener(
//       "input",
//       debounce(() => {
//         this.getData();
//       }, 500),
//     );
//     this.listCountry.addEventListener("click", (event) => {
//       this.getCoutry(event.target.getAttribute("data-alpha3Code"));
//     });
//   }
//   check(val) {
//     if (val === "") {
//       return true;
//     }
//     if (val === " ") {
//       this.message("Пусте поле не може бути, потрібно ввести символи!");
//       return true;
//     }
//     if (
//       !val
//         .toLowerCase()
//         .split("")
//         .some((char) => this.chart.includes(char))
//     ) {
//       this.message("Тільки англійські символи!");
//       return true;
//     }
//     return false;
//   }
//   message(message, title = "Увага!", type = "error") {
//     const notice = alert({
//       title: title,
//       text: message,
//       type: type,
//       delay: 2500,
//       // hide: false,
//     });
//     notice.on("pnotify:confirm", () => {
//       // User confirmed, continue here...
//     });
//     notice.on("pnotify:cancel", () => {
//       // User canceled, continue here...
//     });
//   }
// }

// const search = new Country();
// search.init();
// // ============= Shevchuk ========================= //

// // ============= Muzyka ========================= //
// import "./styles/styles.css";
// import "@pnotify/core/dist/BrightTheme.css";
// import lodash from "lodash";
// import fetchCountries from "./js/fetchCountries";

// const input = document.querySelector(".js-input");
// input.addEventListener(
//   "input",
//   lodash.debounce(() => {
//     fetchCountries(input.value);
//   }, 300),
// );
// // ============= Muzyka ========================= //

// // ============= Vitovych ========================= //
// import "./styles/styles.css";
// import debounce from "lodash.debounce";
// // import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
// import "@pnotify/core/dist/BrightTheme.css";
// import "@pnotify/core/dist/PNotify.css";

// // const myAlert = alert({
// //     text: "I'm an alert.",
// //     type: 'Error',
// //     title: 'You are welcome',
// //   });

// //   // Automatically set the type.
// //   const myNotice = notice({
// //     text: "I'm a notice.",
// //   });

// //   const myInfo = info({
// //     text: "I'm an info message."
// //   });

// //   const mySuccess = success({
// //     text: "I'm a success message."
// //   });

// //   const myError = error({
// //     text: "I'm an error message."
// //   });
// import { alert } from "@pnotify/core";
// const notice = alert({
//   title: "Confirmation Needed",
//   text: "Are you sure?",
//   hide: false,
//   modules: {
//     Confirm: {
//       confirm: true,
//     },
//   },
// });
// notice.on("pnotify:confirm", () => {
//   // User confirmed, continue here...
// });
// notice.on("pnotify:cancel", () => {
//   // User canceled, continue here...
// });

// const refs = {
//   form: document.querySelector(".searchform"),
//   input: document.querySelector(".searchinput"),
//   ul: document.querySelector(".countries"),
// };

// refs.input.addEventListener(
//   "input",
//   debounce(() => {
//     setUrl();
//   }, 500),
// );

// const url = `https://restcountries.eu/rest/v2/name/`;

// function getdata(data) {
//   let dataLength = data.length;
//   let countries = "";
//   if (dataLength <= 1) {
//     countries = `<li>${data[0].name} - ${data[0].nativeName}
//         <h2>${data[0].name}</h2>
//         <p>Capital: ${data[0].capital}</p>
//         <p>Population: ${data[0].population}</p>
//         <ul>Languages:
//         <li>${data[0].languages[0].name}</li>
//         </ul>
//         <img src="${data[0].flag}" alt="image" width="300">
//         </li>`;
//   } else {
//     countries = data.map((country) => `<li>${country.name}</li>`).join("");
//   }
//   refs.ul.innerHTML = countries;
//   console.log(data);
// }
// function setUrl() {
//   let inputValue = refs.input.value;
//   fetch(url + inputValue)
//     .then((response) => response.json())
//     .then((data) => getdata(data));
// }

// // function showStackTopLeft(type) {
// //     if (typeof window.stackTopLeft === 'undefined') {
// //       window.stackTopLeft = new PNotify.Stack({
// //         dir1: 'down',
// //         dir2: 'right',
// //         firstpos1: 25,
// //         firstpos2: 25,
// //         push: 'top',
// //         maxStrategy: 'close'
// //       });
// //     }
// //     const opts = {
// //       title: 'Over Here',
// //       text: "Check me out. I'm in a different stack.",
// //       stack: window.stackTopLeft
// //     };
// //     switch (type) {
// //       case 'error':
// //         opts.title = 'Oh No';
// //         opts.text = 'Watch out for that water tower!';
// //         opts.type = 'error';
// //         break;
// //       case 'info':
// //         opts.title = 'Breaking News';
// //         opts.text = 'Have you met Ted?';
// //         opts.type = 'info';
// //         break;
// //       case 'success':
// //         opts.title = 'Good News Everyone';
// //         opts.text =
// //           "I've invented a device that bites shiny metal asses.";
// //         opts.type = 'success';
// //         break;
// //     }
// //     PNotify.alert(opts);
// //   }
// //   showStackTopLeft('error');
// // ============= Vitovych ========================= //

// // ============= Zdrok ========================= //
// import debounce from "lodash.debounce";

// import "./styles/styles.css";
// import "./js/fetchCountries.js";
// import "./js/fetchCountries(searchQuery).js";
// import fetchCountries from "./js/fetchCountries.js";
// import fetchCountriesSsearch from "./js/fetchCountries(searchQuery).js";

// const refs = {
//   articlesContainer: document.querySelector(".js-articles"),
//   searchForm: document.querySelector(".js-search-form"),
//   inputForm: document.querySelector(".js-search-input"),
// };

// refs.searchForm.addEventListener(
//   "input",
//   debounce(() => {
//     setUrl();
//   }, 450),
// );
// function setUrl() {
//   let inputValue = refs.inputForm.value;

//   if (inputValue === "") {
//     return;
//   }
//   refs.articlesContainer.innerHTML = "";
//   fetchCountries(inputValue).then(fetchCountriesSsearch);
// }
// // ============= Zdrok ========================= //

// ============= Petrovskii ========================= //
import "./styles/styles.css";
import debounce from "lodash.debounce";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

import { alert } from "@pnotify/core";
const notice = alert({
  title: "Confirmation Needed",
  text: "Are you sure?",
  hide: false,
  modules: {
    Confirm: {
      confirm: true,
    },
  },
});
notice.on("pnotify:confirm", () => {});
notice.on("pnotify:cancel", () => {});
const refs = {
  form: document.querySelector(".search-form"),
  input: document.querySelector(".search-input"),
  ul: document.querySelector(".countries"),
};
refs.input.addEventListener(
  "input",
  debounce(() => {
    setUrl();
  }, 500),
);
const url = `https://restcountries.eu/rest/v2/name/`;
function getdata(data) {
  let dataLength = data.length;
  let countries = "";
  if (dataLength <= 1) {
    countries = `<li>${data[0].name} - ${data[0].nativeName}
        <h2>${data[0].name}</h2>
        <p>Capital: ${data[0].capital}</p>
        <p>Population: ${data[0].population}</p>
        <ul>Languages:
        <li>${data[0].languages[0].name}</li>
        </ul>
        <img src="${data[0].flag}" alt="image" width="300">
        </li>`;
  } else {
    countries = data.map((country) => `<li>${country.name}</li>`).join("");
  }
  refs.ul.innerHTML = countries;
  console.log(data);
}
function setUrl() {
  let inputValue = refs.input.value;
  fetch(url + inputValue)
    .then((response) => response.json())
    .then((data) => getdata(data));
}
// ============= Petrovskii ========================= //
