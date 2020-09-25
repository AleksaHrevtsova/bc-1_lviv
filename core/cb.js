"use strict";
// // ФУНКЦИЯ ВЫСШЕГО ПОРЯДКА
// function toLearnFE(cb1, cb2) {
//   cb1();
//   cb2();
// }

// toLearnFE(toLearnHTML, toLearnCSS);
// toLearnFE(toLearnJS, toLearnREACT);

// // CALLBACK
// function toLearnHTML() {
//   console.log(`I learn HTML`);
// }

// function toLearnCSS() {
//   console.log(`I learn CSS`);
// }
// function toLearnJS() {
//   console.log(`I learn JS`);
// }

// function toLearnREACT() {
//   console.log(`I learn REACT`);
// }

// const user = {
//   name: "Robot",
//   toShowName() {
//     return console.log(this.name);
//   },
// };

// const user2 = {
//   name: "Plane",
// };
// // console.log(this);
// toLearnFE(user.toShowName.bind(user2), toLearnREACT);
// toLearnFE(user.toShowName.bind(user), toLearnREACT);

// function toGreetNewUser(title, site) {
//   alert(`${this.name}, we ${title} to see you in our ${site}`);
// }
// toGreetNewUser.call(user2, "glad", "portfolio");
// toGreetNewUser.call(user, "hate", "blog");

// toGreetNewUser.apply(user2, ["glad", "portfolio"]);
// toGreetNewUser.apply(user2, ["glad", "portfolio"]);

// FUNCTION EXPRESSION
const expressionFunc = function () {
  console.log(`FUNCTION EXPRESSION`);
  console.log(arguments);
  let total = 0;
  let argumentsArr = Array.from(arguments);
  argumentsArr.forEach((el) => {
    console.log(el);
    return (total += el);
  });
  return console.log(total);
};
expressionFunc(1, 2, 3);
// FUCNTION DECLARATION
declarationFunc();
function declarationFunc() {
  console.log(`FUCNTION DECLARATION`);
}

// ARROW FUCNTION
const arrowFunc = () => console.log(`ARROW FUCNTION`);

arrowFunc();

const arrowFunc1 = (val, ...args) => {
  console.log(`ARROW FUCNTION with return`);
  console.log(args);
  for (let el of args) {
    val += el;
  }
  console.log(val + 1);
};
arrowFunc1(100, 1, 2, 3, 4, 5);

const arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((el) => el * 2);
console.log(arr2);
