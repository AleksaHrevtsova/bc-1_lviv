console.log(`hello`);

function toSayHello() {
  setTimeout(() => {
    console.log(`Привет`);
  }, 0);
}

function toSayHello1() {
  setTimeout(() => {
    console.log(`Привет!`);
  }, 500);
}
toSayHello1();
// let num = 0;
// function toSayHello() {
//   const int = setInterval(() => {
//     num += 1;
//     console.log(`Привет`);
//     if (num === 5) {
//       clearInterval(int);
//       return;
//     }
//   }, 1000);
// }

toSayHello();

const date1 = new Date();
console.log(date1);
console.log(date1.getDay());

const date2 = new Date("Aug 16, 2020");
console.log(date2.getDay());
console.log(date2);

const date22 = new Date("Dec 16, 2020");
console.log(date22.getMonth());
console.log(date22);

const date3 = new Date(200000000);
console.log(date3);

const date4 = Date.now();
console.log(date4);

const date44 = new Date(2020, 9, 1, 12, 0);
console.log(date44);
date44.setFullYear(2019, 0, 1);
console.log(date44);

let num = Math.round(Math.random() * (10 - 1) + 1);
console.log(`рандомное число`, num);

function f1(cb1, cb2) {
  if (num > 5) {
    cb1();
  } else {
    cb2();
  }
}

function suc() {
  console.log(`Условие выполняется`);
}
function err() {
  console.log(`Ошибка`);
}
f1(suc, err);

// function f2() {
//   let promise = new Promise((resolve, reject) => {
//     if (num > 5) {
//       resolve(console.log(`Ok`));
//     } else {
//       reject(console.error(`ne Ok`));
//     }
//   });
//   return promise;
// }
// f2();

let promise = new Promise((res, rej) => {
  //   setTimeout(() => {
  res(5);
  //   }, 500);
});

console.log(promise);

promise
  .then((v) => {
    v += 1;
    console.log(v);
    return v;
  })
  .then((v) => {
    v += 2;
    console.log(v);
    return v;
  })
  .catch((err) => console.log(err));
console.log(v);
