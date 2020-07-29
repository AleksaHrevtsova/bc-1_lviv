// // ============= Muzyka ========================= //
// import { renderCard, renderCountryList } from "./renders.js";
// import { alert, defaultModules } from "@pnotify/core";
// import * as PNotifyMobile from "@pnotify/mobile";
// defaultModules.set(PNotifyMobile, {});

// const result = document.querySelector(".result");
// const basicUrl = "https://restcountries.eu/rest/v2/name/";

// const fetchCountries = (inputValue) => {
//   result.innerHTML = "";
//   fetch(`${basicUrl}${inputValue}`)
//     .then((response) => {
//       if (response.status < 400) {
//         return response.json();
//       } else {
//         alert("There is no matches found.");
//       }
//     })
//     .then((data) => {
//       if (data) {
//         if (data.length > 10) {
//           alert("Too many mathces found. Please enter a more specific query!");
//         } else if (data.length < 2) {
//           renderCard(data[0]);
//         } else {
//           renderCountryList(data);
//         }
//       }
//     });
// };

// export default fetchCountries;
// // ============= Muzyka ========================= //

// ============= Zdrok ========================= //
function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

export default fetchCountries;
// ============= Zdrok ========================= //
