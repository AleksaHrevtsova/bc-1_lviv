// ============= Zdrok ========================= //
import articlesTpl from "../templates/countries.hbs";
import namesCountry from "../templates/oneCountry.hbs";

import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

import { alert } from "@pnotify/core";
let notice;

const refs = {
  articlesContainer: document.querySelector(".js-articles"),
};

function fetchCountriesSsearch(data) {
  const markup = namesCountry(data);
  const markupOne = articlesTpl(data);
  if (data.length > 1 && data.length < 10) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
  } else if (data.length === 1) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", markupOne);
  } else if (data.length >= 10) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", "");
    notice = alert({
      title: "Необхідно зробити запит більш специфічним.",
      hide: true,
      delay: 1300,
    });
  }
}

export default fetchCountriesSsearch;
// ============= Zdrok ========================= //
