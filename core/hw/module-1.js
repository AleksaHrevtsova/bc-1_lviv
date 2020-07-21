// 1
const name = "Генератор защитного поля";
let price = 1000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);
price = 2000;
console.log(`Выбран "${name}", цена за штуку ${price} кредитов`);

// 2
const total = 100;
let ordered = 50;
if (ordered < total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров");
}
// Заказ оформлен, с вами свяжется менеджер

ordered = 30;
if (ordered < total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров");
}
// Заказ оформлен, с вами свяжется менеджер

ordered = 80;
if (ordered < total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров");
}
// Заказ оформлен, с вами свяжется менеджер

ordered = 130;
if (ordered <= total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров");
}
// На складе недостаточно товаров

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

// // 5
// let message = prompt("Страна").toLowerCase();

// switch (message) {
//   case "китай":
//     alert("В Китай 100 кредитов");
//     break;
//   case "чили":
//     alert("В Чили 250 кредитов");
//     break;
//   case "австралия":
//     alert("В Австралию 170 кредитов");
//     break;
//   case "индия":
//     alert("В Индию 80 кредитов");
//     break;
//   case "ямайка":
//     alert("В Ямайку 120 кредитов");
//     break;
//   default:
//     alert("В вашей стране доставка не доступна");
//     break;
// }

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
