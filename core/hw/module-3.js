// task-1
// // Напиши скрипт, який, для об'єкта user, послідовно:

// // додає поле mood зі значенням 'happy'
// // замінює значення hobby на 'skydiving'
// // замінює значення premium на false
// // виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// // ==========================
// // 1 - додаэмо нову властивість
// user.mood = "happy";

// // 2 - змінюємо значення властивостей через звернення до об'єкта або
// // user.hobby = "skydiving";
// // user.premium = false;
// // робимо метод, який змінює значення властивостей
// user.updateProps = function (value) {
//   this.hobby = value;
//   console.log(this.hobby);
//   //   console.log(`нове значення властивості ${key} - ${value}`);
// };
// user.updateProps("skydiving");
// console.log(user);

// 3 - робимо метод, що виводить всі властивості у форматі ключ : значення
// user.showProps = function (obj) {
//   for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}: ${value}`);
//   }
// };
// user.showProps(user);
// ==========================
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// //Function expression

// const toShowUpdateUser = function (object) {
//   let updateUser = Object.keys(object);
//   console.log(updateUser);
//   for (const key of updateUser) {
//     console.log(`${key} - ${object[key]}`);
//   }
// };
// toShowUpdateUser(user);

// // ==============================================
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(key + ": " + user[key]);
// }
// // ==============================================

// task-2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в
// об'єкті. Функція повертає число - кількість властивостей.

// const countProps = function (obj) {
//   const count = Object.keys(obj);
//   return count.length;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// // =======================================
// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
// // =======================================

// task-3
// Напиши функцію findBestEmployee(employees), яка приймає
// об'єкт співробітників і повертає ім'я найпродуктивнішого
// (який виконав більше всіх задач). Співробітники і кількість
// виконаних завдань містяться як властивості об'єкта в форматі
// "ім'я":"кількість задач".

// const findBestEmployee = function (employees) {
//   let values = Object.values(employees);
//   let keys = Object.keys(employees);

//   let valueBestEmployee = 0;
//   let nameBestEmployee = 0;

//   let arrLength = keys.length;

//   for (let i = 0; i < arrLength; i += 1) {
//     // console.log(values[i])
//     if (valueBestEmployee < values[i]) {
//       valueBestEmployee = values[i];
//       nameBestEmployee = keys[i];
//     }
// }
// return `${nameBestEmployee} : ${valueBestEmployee}`;
// };

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   const names = Object.keys(employees);
//   let maxPoints = values[0];
//   let nameOfBest = names[0];

//   for (let i = 0; i < values.length; i += 1) {
//     if (maxPoints < values[i]) {
//       maxPoints = values[i];
//       nameOfBest = names[i];
//     }
//   }
//   return nameOfBest;
// };

// const findBestEmployee = function (employees) {
//   // твій код
//   let bestEmployer = "";
//   let taskCount = 0;
//   for (let i in employees) {
//     if (employees[i] > taskCount) {
//       bestEmployer = i;
//       taskCount = employees[i];
//     }
//   }
//   return bestEmployer;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// task-4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її.
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

// const countTotalSalary = function (employees) {
//   let total = 0;
//   let values = Object.values(employees);

//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };
// const countTotalSalary = function (employees) {
//     const salaries = Object.values(employees);
//     let totalSalaries = 0;
//     for (let i = 0; i < salaries[i]; i += 1) {
//       totalSalaries += salaries[i];
//     }
//     return totalSalaries;
//   };
// const countTotalSalary = function (employees) {
//   let total = 0;
//   let values = Object.values(employees);

//   for (const value of values) {
//     total = total + value;
//   }
//   return total;
// };
// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// task-5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив
// об'єктів і ім'я властивості. Повертає масив значень певної властивості
// prop з кожного об'єкта в масиві.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   let arrProps = [];
//   for (let obj of arr) {
//     // console.log(arr);
//     // console.log(obj)
//     for (let item in obj) {
//       // console.log(item);
//       if (item === prop) arrProps.push(obj[item]);
//     }
//     // if(prop in obj) {
//     //  arrProps.push(obj[prop]);
//     // }
//   }
//   return arrProps;
// };
// const getAllPropValues = function (arr, prop) {
//     const propes = [];

//     for (const product of arr) {
//       if (prop in product) {
//         propes.push(product[prop]);
//       }
//     }
//     return propes;
//   };

// const getAllPropValues = function (arr, prop) {
//   let properties = [];

//   for (let product of arr) {
//     for (let key in product) {
//       if (key === prop) {
//         properties.push(product[key]);
//       }
//     }
//   }
//   return properties;
// };
// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];
// const getAllPropValues = function (arr, prop) {
//   const values = [];
//   for (const item of arr) {
//     let value = item[prop];
//     if (value != undefined) {
//       values.push(value);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []
// task-6
// Напиши функцію calculateTotalPrice(allProdcuts, productName),
// яка отримує масив об'єктів та ім'я продукту (значення властивості name).
// Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice = 0;
//   for (const el of allProdcuts) {
//     // console.log(el)
//     if (el.name === productName) {
//       totalPrice = el.price * el.quantity;
//     }
//   }
//   return totalPrice;
// };
// const calculateTotalPrice = function (allProducts, productName) {
//   let totalPrice;
//   for (const products of allProducts) {
//     if (products.name === productName) {
//       totalPrice = products.price * products.quantity;
//     }
//   }
//   return totalPrice;
// };
// const calculateTotalPrice = function (arr, productName) {
//   let totalCost = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name === productName) {
//       totalCost += arr[i].price * arr[i].quantity;
//     }
//   }
//   return totalCost;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроїд")); // 2800
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let total = 0;
//   for (const item of allProdcuts) {
//     let name = item.name;

//     if (productName === name) {
//       total += item.price * item.quantity;
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200
// console.log(calculateTotalPrice(products, "Дроїд")); // 2800

// task-7
// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи
// з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// //   Кожна транзакція - це об'єкт з властивостями: id, type і amount

// const account = {
//   id: 0,
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   //   Метод створює і повертає об'єкт транзакції.
//   //   Приймає суму і тип транзакції.

//   createTransaction(amount, type) {
//     this.id += 1;
//     console.log("id:", this.id);
//     return {
//       id: this.id,
//       type: type,
//       amount: amount,
//     };
//   },

//   //   Метод відповідає за додавання суми до балансу.
//   //   Приймає суму танзакції.
//   //   Викликає createTransaction для створення об'єкта транзакції
//   //   після чого додає його в історію транзакцій

//   deposit(amount) {
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },

//   //   Метод відповідає за зняття суми з балансу.
//   //   Приймає суму танзакції.
//   //   Викликає createTransaction для створення об'єкта транзакції
//   //   після чого додає його в історію транзакцій.
//   //
//   //   Якщо amount більше, ніж поточний баланс, виводь повідомлення
//   //   про те, що зняття такої суми не можливо, недостатньо коштів.

//   withdraw(amount) {
//     if (this.balance < this.amount) {
//   .    console.log("You have no money");
//     } else {
//       this.balance -= amount;
//       const newTransaction = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW
//       );
//       this.transactions.push(newTransaction);
//     }
//   },

//   //   Метод повертає поточний баланс

//   getBalance() {
//     return this.balance;
//   },

//   //   Метод шукає і повертає об'єкт транзакції по id

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   //    Метод повертає кількість коштів
//   //    певного типу транзакції з усієї історії транзакцій

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         sum += transaction.amount;
//       }
//     }
//     return sum;
//   },
// };

// account.deposit(200);
// account.deposit(300);
// account.deposit(400);
// account.withdraw(200);
// account.withdraw(300);
// account.withdraw(400);
// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal("withdraw"));
// console.log(account);
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   lastId: 0,

//   deposit(amount) {
//     let transaction = {};
//     transaction.id = this.lastId + 1;
//     this.lastId += 1;
//     transaction.type = Transaction.DEPOSIT;
//     transaction.amount = amount;
//     this.addTransaction(transaction);
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       let transaction = {};
//       transaction.id = this.lastId + 1;
//       this.lastId += 1;
//       transaction.type = Transaction.WITHDRAW;
//       transaction.amount = amount;
//       this.addTransaction(transaction);
//       this.balance -= amount;
//     } else {
//       console.log("Не достатньо коштів на рахунку");
//     }
//   },

//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },

//   getBalance() {
//     return this.balance;
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   getTransactionTotal(type) {
//     let total = 0;

//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }

//     return total;
//   },
// };

// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());

// console.log("Transaction 1: ");
// console.log(account.getTransactionDetails(1));
// console.log("Transaction 3: ");
// console.log(account.getTransactionDetails(3));
// console.log("Transaction 4: ");
// console.log(account.getTransactionDetails(4));

// console.log(
//   "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW)
// );
// console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));
