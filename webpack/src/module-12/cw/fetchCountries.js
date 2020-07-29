const url = `https://restcountries.eu/rest/v2/all`;
const endPoint = `/name`;
export default function fetchCoutries(searchQuery) {
  return fetch(url, options).then((res) => res.json());
}

import debounce from "lodash.debounce";
input.addEventListener(
  "input",
  debounce(() => {}, 500),
);



// npm update --depth 5 @babel/preset-env
// npm update --depth 5 @babel/compat-data
