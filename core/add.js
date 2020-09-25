// const name = "11";

// const user = {
//   name: "user",
//   toShowName() {
//     return this.name;
//   },
// };

// console.log(user.toShowName(user));

// const ConstructorFunc = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.toShowAge = function () {
//     console.log(this.age);
//   };
// };

// console.log(ConstructorFunc.prototype);

// ConstructorFunc.prototype.toGreet = function () {
//   console.log(`Hello, user`);
// };

// const newUser = new ConstructorFunc("sss", 20);
// console.log(newUser);

// const newUser2 = new ConstructorFunc("ppp", 40);
// console.log(newUser2);

// const bestUser = Object.create(newUser);
// bestUser.name = "bestUser";
// console.log(bestUser);
// // function aaa() {
// //   for (let i = 4; i < 5; i++) {
// //     i += 1;
// //     console.log(i);
// //   }
// // }
// // aaa();

// // const arr = [1, 2, 3];
// // console.log(arr.length);
// // arr.length = 6;
// // console.log(arr.length);
// // console.log(arr);

// // arr.length = 2;
// // console.log(arr.length);
// // console.log(arr);

// // arr.push(3, 4);
// // console.log(arr);

// // const newArr = [1, 2, 3, 4, 5];
// // const sliceArr = newArr.slice(-2);
// // console.log("новый массив", sliceArr);
// // console.log("исходный массив", newArr);

// // const concatArr = newArr.concat(sliceArr).concat(arr);
// // console.log(concatArr);

// // const newConcat = newArr.concat(sliceArr, arr);
// // console.log(newConcat);

// // function toShowArgs(...args) {
// //   console.log(args);
// // }
// // toShowArgs(1, 2, 3);

// // const bbb = () => {
// //   console.log(arguments);
// // };
// // bbb(4, 4, 4);
// // const names = [];
// // const ages = [];
// // const emails = [];
// // const ccc = (name, age, email, ...args) => {
// //   names.push(name);
// //   ages.push(age);
// //   emails.push(email);
// //   console.log(args);
// // };
// // ccc("Katya", 18, "katya@gmail.com", 4, 4, 5);
// // ccc("Petya", 18, "katya@gmail.com", 4, 4, 5);
// // ccc("Vasya", 18, "katya@gmail.com", 4, 4, 5);
// // console.log(names);
// // console.log(ages);
// // console.log(emails);

// // const user = {
// //   "1": "Aleksa",
// //   age: 30,
// // };
// // const keys = Object.keys(user);
// // const values = Object.values(user);
// // console.log("ключи всегда строчные", keys);
// // console.log("значения разные", values);

// // // console.log(user1.name);
// // console.log(user.lastName);

// // const newUser = {
// //   name: "Sandra",
// //   age: 18,
// // };
// // const src = [{ a: 1 }, { b: 2 }, newUser];
// // // МУТИРУЕТ ИСХОДНЫЙ ОБЪЕКТ
// // const upgrateUser = Object.assign(user, ...src);
// // console.log("user", user);
// // console.log(upgrateUser);
// // console.log(upgrateUser === user);

// // const arr1 = [13, 22, 34];
// // const [num1, num2, num3, num4] = arr1; // DESTRUCTURING
// // const num1 = 13;
// // const num2 = 22;
// // const num3 = 34;
// // const num1 = undefined;
// // console.log(num1);

// // можно изменить значение, если обїявлена через let
// // num1 = 1; -
// // console.log(num1);

// // console.log(num4);
// // console.log(arr1);

// // const fruits = {
// //   apples: 3,
// //   oranges: 10,
// // };

// // const { apples: superApples, oranges, bananas = 22 } = fruits;
// // console.log("superApples", superApples);
// // console.log("oranges", oranges);
// // console.log("bananas", bananas);
// // console.log(fruits);
// // bananas = 10;
// // console.log(bananas);
// // // 4
// // let f = 64;
// // let c = 0;
// // c = (f - 32) / 1.8;
// // console.log(c);

// // // 3
// // let a = 1;
// // let b = 2;
// // let sign = "+";

// // function result(cb, ...args) {
// //   cb(...args);
// // }
// // function operation(x = 1, y = 1, sign = "+") {
// //   if (sign === "+") return console.log(x + y);
// //   if (sign === "-") return console.log(x - y);
// //   if (sign === "*") return console.log(x * y);
// //   if (sign === "/") return console.log(x / y);
// //   if (sign === "**") return console.log(x ** y);
// //   if (sign === "%") return console.log(x % y);
// //   return `Введите математический оператор!`;
// // }
// // result(operation, a, b, sign);

// // // 1
// // const years = [];
// // function generateYearsArr() {
// //   for (let i = 0; i < 2200; i += 4) {
// //     // console.log(i);
// //     // if (i > 1900) {
// //     years.push(i);
// //     // }
// //   }
// //   return years;
// // }
// // generateYearsArr();
// // console.log(years);

// // const fullYears = [];
// // function generateYearsArr2() {
// //   for (let i = 0; i < 2200; i += 1) {
// //     // console.log(i);
// //     if (i > 1900) {
// //       fullYears.push(i);
// //     }
// //   }
// //   return fullYears;
// // }
// // generateYearsArr2();

// // let year = fullYears[Math.ceil(Math.random() * fullYears.length)];

// // // let year = 1232;
// // console.log(year);

// // console.log(years.includes(year));

// // function toCheckYear(y) {
// //   if (y % 4 === 0) {
// //     console.log(`Высокосный год`);
// //   } else {
// //     console.log(`usually`);
// //   }
// // }

// // toCheckYear(year);

// class Calc {
//   constructor(firtsNumber, secondNumber) {
//     this.firtsNumber = firtsNumber;
//     this.secondNumber = secondNumber;
//   }

//   question() {
//     this.firtsNumber = +prompt("Первое число:");
//     this.secondNumber = +prompt("Второе число:");
//     if (isNaN(this.firtsNumber) || isNaN(this.secondNumber)) {
//       return (
//         (this.firtsNumber = undefined), (this.secondNumber = undefined)
//       );
//     } else {
//       return this.firtsNumber, this.secondNumber;
//     }
//   }
// }

// const calculator = new Calc();

// console.log(calculator.question());
// console.log(calculator);

const url = "https://date.nager.at/api/v2/publicholidays/2017/AT";
// const options = {
//   headers: 
// 'Access-Control-Allow-Origin': 'http://foo.example'
// }
fetch(url).then((data) => console.log(data));
