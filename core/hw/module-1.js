// // 1
// const name = "Генератор защитного поля";
// let price = 1000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// // 2
// const total = 100;
// let ordered = 50;
// if (ordered < total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно товаров");
// }
// // Заказ оформлен, с вами свяжется менеджер

// ordered = 30;
// if (ordered < total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно товаров");
// }
// // Заказ оформлен, с вами свяжется менеджер

// ordered = 80;
// if (ordered < total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно товаров");
// }
// // Заказ оформлен, с вами свяжется менеджер

// ordered = 130;
// if (ordered <= total) {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// } else {
//   console.log("На складе недостаточно товаров");
// }
// // На складе недостаточно товаров

// // 3
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// message = prompt("Введите пороль");

// if (message == null) {
//   alert("Вход отменен пользователем");
// } else if (message == ADMIN_PASSWORD) {
//   alert("Правильний пороль");
// } else {
//   alert("Пароль не правильный");
// }

// // 4
// let credits = 23580;
// const pricePerDroid = 3000;
// const numberDroids = +prompt("Сколько дроидов купить"); // приписываешь + перед командой prompt

// if (numberDroids === 0) {
//   alert("Отменено пользователем");
// } else {
//   let totalSum = pricePerDroid * numberDroids;
//   if (credits > totalSum) {
//     credits = credits - totalSum;
//     alert(
//       `Вы купили ${numberDroids} дроидов, на счету осталось ${credits} кредитов.`
//     );
//   } else {
//     alert("Недостаточно средств на счету!");
//   }
// }

// 5
let country = prompt("Страна").toLowerCase();
let message;
let price;

switch (country) {
  case "китай":
    price = 100;
    message = `В ${country} ${price} кредитов`;
    break;
  case "чили":
    price = 250;
    message = `В ${country} ${price} кредитов`;
    break;
  case "австралия":
    price = 170;
    message = `В ${country} ${price} кредитов`;
    break;
  case "индия":
    price = 80;
    message = `В ${country} ${price} кредитов`;
    break;
  case "ямайка":
    price = 120;
    message = `В ${country} ${price} кредитов`;
    break;
  default:
    message = "В вашей стране доставка не доступна";
    break;
}
alert(message);
// // 6
// let input;
// let totalNum = 0;

// while (input !== null) {
//   input = prompt("Введите число");
//   if (isNaN(input)) {
//     alert("Введите число!");
//     continue;
//   }
//   totalNum += +input;
// }
// alert("Общая сумма чисел равна " + totalNum); // выводм итоговое значение после цикла
