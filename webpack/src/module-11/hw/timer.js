// // ==================== Ivanuts ================= //
// const timeDays = document.querySelector('[data-value="days"]');
// const timeHours = document.querySelector('[data-value="hours"]');
// const timeMins = document.querySelector('[data-value="mins"]');
// const timeSecs = document.querySelector('[data-value="secs"]');

// class CountdownTimer {
//   constructor(obj) {
//     this.selector = obj.selector;
//     this.targetDate = obj.targetDate;
//     this.deltaTime = 0;
//   }

//   start() {
//     // if (this.targetDate < Date.now()) return;
//     const startTime = this.targetDate;
//     this.timerId = setInterval(() => {
//       const currentTime = Date.now();
//       this.deltaTime = startTime - currentTime;
//       this.updateClockFace(this.deltaTime);
//     }, 1000);
//   }

//   updateClockFace(time) {
//     // time < 0 ? (time *= -1) : null;
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     timeDays.textContent = days;
//     timeHours.textContent = hours;
//     timeMins.textContent = mins;
//     timeSecs.textContent = secs;
//   }
// }

// const timer = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Aug 17, 2020"),
// });
// timer.start();
// // ==================== Ivanuts ================= //

// // ==================== Petrovsky ================= //
// const ref = {
//   days: document.querySelector('[data-value="days"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   minuts: document.querySelector('[data-value="mins"]'),
//   seconds: document.querySelector('[data-value="secs"]'),
// };

// class CountdownTimer {
//   constructor(obj) {
//     this.selector = obj.selector;
//     this.targetDate = obj.targetDate;
//     this.delta = 0;
//   }

//   start() {
//     const startTime = this.targetDate;
//     this.timerId = setInterval(() => {
//       const carrentDate = Date.now();
//       this.delta = startTime - carrentDate;
//       this.updateClockFace(this.delta);
//     }, 1000);
//   }

//   updateClockFace(time) {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     ref.days.textContent = days;
//     ref.hours.textContent = hours;
//     ref.minuts.textContent = mins;
//     ref.seconds.textContent = secs;
//   }
// }
// console.log(ref.days);
// console.log(ref.hours);
// console.log(ref.minuts);
// console.log(ref.seconds);

// const countdown = new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jul 30, 2020"),
// });

// countdown.start();
// // ==================== Petrovsky ================= //


// ==================== Muzyka ================= //
// ==================== Muzyka ================= //