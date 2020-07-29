// декоратор - передает вызов функции не более 1 раза в ms
import debounce from "lodash.debounce";

const refs = { form: document.getElementById("feedback-form") };
console.log(refs);
const persistedFeedback = localStorage.getItem("feedback");

// если по ключу найдено значение в localStorage,
// то запиши его в значение нашей textarea
if (persistedFeedback) {
  const textarea = refs.form.elements.message;
  textarea.value = persistedFeedback;
}
localStorage.setItem("name", "Tima");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
// refs.form.addEventListener("input", (e) => {
//   const textarea = e.currentTarget.elements.message;
//   localStorage.setItem("feedback", textarea.value);
// });

refs.form.addEventListener(
  "input",
  debounce((e) => {
    const textarea = e.target;
    localStorage.setItem("feedback", textarea.value);
  }, 400),
  // (e) => {
  //   const textarea = e.target;
  //   localStorage.setItem("feedback", textarea.value);
  // },
);

// если пользователь вводит данные, они сохраняются,
// а когда произошла отправка, данные удаляются
refs.form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem("feedback");
});
