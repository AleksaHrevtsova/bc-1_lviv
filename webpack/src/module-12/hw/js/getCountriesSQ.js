// ============= Ivanuts ========================= //
import oneCounties from "../templates/oneCountry.hbs";
import allCountries from "../templates/allCountries.hbs";
import { alert } from "@pnotify/core";

import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

let notice;

const refs = {
  articlesContainer: document.querySelector(".js-countries"),
};

function getdata(data) {
  const oneCountryList = oneCounties(data);
  const allCountryList = allCountries(data);
  if (data.length > 1 && data.length < 10) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", allCountryList);
  } else if (data.length === 1) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", oneCountryList);
  } else if (data.length >= 10) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", "");
    notice = alert({
      title: "Введіть конкретнішу назву",
      hide: true,
      delay: 1500,
    });
  }
}
export default getdata;
// ============= Ivanuts ========================= //