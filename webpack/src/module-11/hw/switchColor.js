// // ==================== Ivanuts ================= //
// const refs = {
//   body: document.querySelector("body"),
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
// };

// refs.btnStart.addEventListener("click", () => {
//   refs.btnStart.disabled = true;
//   refs.btnStop.disabled = false;
//   toChangeColor();
// });
// refs.btnStop.addEventListener("click", () => {
//   refs.btnStop.disabled = true;
//   refs.btnStart.disabled = false;
//   stopToChange();
// });

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let interval;

// function toChangeColor() {
//   interval = setInterval(() => {
//     const color = randomIntegerFromInterval(0, colors.length - 1);
//     refs.body.style.backgroundColor = colors[color];
//   }, 1000);
// }

// function stopToChange() {
//   clearInterval(interval);
// }
// // ==================== Ivanuts ================= //

// // ==================== Petrovsky ================= //
// const refs = {
//   body: document.querySelector("body"),
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
// };

// refs.btnStart.addEventListener("click", () => {
//   refs.btnStart.disabled = true;
//   refs.btnStop.disabled = false;
//   toChangeColor();
// });

// refs.btnStop.addEventListener("click", () => {
//   refs.btnStop.disabled = true;
//   refs.btnStart.disabled = false;
//   stopToChange();
// });

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let interval;

// function toChangeColor() {
//   interval = setInterval(() => {
//     const color = randomIntegerFromInterval(0, colors.length - 1);
//     refs.body.style.backgroundColor = colors[color];
//   }, 1000);
// }

// function stopToChange() {
//   clearInterval(interval);
// }
// // ==================== Petrovsky ================= //

// // ==================== Muzyka ================= //
// const startBtnRef = document.querySelector('button[data-action="start"]');
// const stopBtnRef = document.querySelector('button[data-action="stop"]');
// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
// let timerId = null;

// startBtnRef.addEventListener("click", (event) => {
//   event.target.disabled = true;
//   timerId = setInterval(() => {
//     document.body.style.backgroundColor =
//       colors[randomIntegerFromInterval(0, colors.length - 1)];
//   }, 1000);
// });

// stopBtnRef.addEventListener("click", (event) => {
//   event.target.disabled = false;
//   clearInterval(timerId);
// });
// // ==================== Muzyka ================= //

// // ==================== Vitovych ================= //
// const refs = {
//   body: document.querySelector("body"),
//   btnStart: document.querySelector('[data-action="start"]'),
//   btnStop: document.querySelector('[data-action="stop"]'),
// };
// // console.dir(refs.btnStart);

// refs.btnStart.addEventListener("click", () => {
//   refs.btnStart.disable = true;
//   refs.btnStop.disable = false;
//   toChangeColor();
// });
// refs.btnStop.addEventListener("click", () => {
//   refs.btnStart.disable = false;
//   refs.btnStop.disable = true;
//   stopToChange();
// });

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];
// console.log(colors);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// let interval;

// function toChangeColor() {
//   interval = setInterval(() => {
//     const color = randomIntegerFromInterval(0, colors.length, -1);
//     refs.body.style.backgroundColor = colors[color];
//   }, 1000);
// }

// function stopToChange() {
//   clearInterval(interval);
// }

// // ==================== Vitovych ================= //
