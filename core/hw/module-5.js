// // // 1
// // const Account = function (obj) {
// //   this.login = obj.login;
// //   this.email = obj.email;
// // };

// // Account.prototype.getInfo = function () {
// //   return console.log(` Login: ${this.login}, Email: ${this.email}`);
// // };

// // const mango = new Account({
// //   login: "Mangozedog",
// //   email: "mango@dog.woof",
// // });

// // mango.getInfo();
// // const poly = new Account({
// //   login: "Poly",
// //   email: "poly@mail.com",
// // });

// // poly.getInfo();
// // const Account = function ({login, email}) {
// //   this.login = login;
// //   this.email = email;
// // };

// // Account.prototype.getInfo = function () {
// //   return console.log(`Login: ${this.login}, Email: ${this.email}`);
// // };
// // console.log(Account.prototype.getInfo); // function
// // const mango = new Account({
// //   login: "Mangozedog",
// //   email: "mango@dog.woof",
// // });
// // mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// // const poly = new Account({
// //   login: "Poly",
// //   email: "poly@mail.com",
// // });
// // poly.getInfo(); // Login: Poly, Email: poly@mail.com
// // // // 2
// // class User {
// //   constructor({ name, age, followers }) {
// //     this.name = name;
// //     this.age = age;
// //     this.followers = followers;
// //   }
// //   getInfo() {
// //     console.log(`User ${this.name} ${this.age} ${this.followers}`);
// //   }
// // }

// // const mango = new User({
// //   name: "Mango",
// //   age: 2,
// //   followers: 20,
// // });

// // mango.getInfo(); // User Mango is 2 years old and has 20 followers

// // const poly = new User({
// //   name: "Poly",
// //   age: 3,
// //   followers: 17,
// // });

// // poly.getInfo(); // User Poly is 3 years old and has 17 followers

// // // 3
// // class Storage {
// //   constructor(arr) {
// //     this.items = arr;
// //   }
// //   getItems() {
// //     return this.items;
// //   }
// //   addItem(item) {
// //     return this.items.push(item);
// //   }
// //   removeItem(item) {
// //     for (let i = 0; i < this.items.length; i += 1) {
// //       console.log(this.items[i]);
// //       if (this.items[i] === item) {
// //         return this.items.splice(i, 1);
// //       }
// //     }
// //   }
// // }

// // const storage = new Storage([
// //   "Нанітоіди",
// //   "Пролонгер",
// //   "Залізні жупи",
// //   "Антигравітатор",
// // ]);

// // const items = storage.getItems();
// // console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// // storage.addItem("Дроїд");
// // console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// // storage.removeItem("Пролонгер");
// // console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// // // 4
// // class StringBuilder {
// //   constructor(str) {
// //     this._value = str;
// //   }
// //   get value() {
// //     return this._value;
// //   }
// //   append(str) {
// //     return (this._value = this._value + str);
// //   }

// //   prepend(str) {
// //     return (this._value = str + this._value);
// //   }

// //   pad(str) {
// //     return (this._value = str + this._value + str);
// //   }
// // }

// // const builder = new StringBuilder(".");

// // builder.append("^");
// // console.log(builder.value); // '.^'

// // builder.prepend("^");
// // console.log(builder.value); // '^.^'

// // builder.pad("=");
// // console.log(builder.value); // '=^.^='

// // // 5
// // class Car {
// //   static getSpecs(car) {
// //     return console.log(`maxSpeed :${car.maxSpeed},speed :${car.speed},isOn :${car.isOn},distance :${car.distance},price :${car.price},
// //        `);
// //   }

// /*

//        * Додай статичний метод `getSpecs(car)`,
//        * який приймає об'єкт-машину як параметр і виводить
//        * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//        */

// /*
//  * Конструктор отримує об'єкт налаштувань.
//  *
//  * Додай властивості майбутнього екземпляра класу:
//  *  speed - поточна швидкість, початкова 0
//  *  price - ціна автомобіля
//  *  maxSpeed - максимальна швидкість
//  *  isOn - заведений автомобіль, значення true або false. Спочатку false
//  *  distance - загальний кілометраж, спочатку 0
//  */
// //   constructor(obj) {
// //     this.maxSpeed = obj.maxSpeed;
// //     this.speed = 0;
// //     this._price = obj.price;
// //     this.isOn = false;
// //     this.distance = 0;
// //   }

// //   get price() {
// //     return this._price;
// //   }

// //   set price(price) {
// //     return (this._price = price);
// //   }
// //   /*
// //    * Додай геттер і сеттер для властивості price,
// //    * який буде працювати з властивістю ціни автомобіля.
// //    */

// //   /*
// //    * Додай код для того, щоб завести автомобіль
// //    * Записує у властивість isOn значення true
// //    */
// //   turnOn() {
// //     return (this.isOn = true);
// //   }

// //   /*
// //    * Додай код для того, щоб заглушити автомобіль
// //    * Записує у властивість isOn значення false,
// //    * і скидає поточну швидкість в 0
// //    */
// //   turnOff() {
// //     return (this.isOn = false), (this.speed = 0);
// //   }

// //   /*
// //    * Додає до властивості speed отримане значення,
// //    * за умови, що результуюча швидкість
// //    * не більше, ніж значення властивості maxSpeed
// //    */
// //   accelerate(value) {
// //     if (this.maxSpeed > this.speed) {
// //       return (this.speed += value);
// //     }
// //   }

// //   /*
// //    * Забирає від властивості speed отримане значення,
// //    * за умови, що результуюча швидкість не менше нуля
// //    */
// //   decelerate(value) {
// //     if (this.speed > 0) {
// //       return (this.speed -= value);
// //     }
// //   }

// //   /*
// //    * Додає в поле distance кілометраж (hours * speed),
// //    * але тільки в тому випадку, якщо машина заведена!
// //    */
// //   drive(hours) {
// //     if (this.isOn) {
// //       return (this.distance = this.distance + this.speed * hours);
// //     }
// //   }
// // }

// // const mustang = new Car({ maxSpeed: 200, price: 2000 });

// // mustang.turnOn();
// // mustang.accelerate(50);
// // mustang.drive(2);

// // Car.getSpecs(mustang);
// // // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// // mustang.decelerate(20);
// // mustang.drive(1);
// // mustang.turnOff();

// // Car.getSpecs(mustang);
// // // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// // console.log(mustang.price); // 2000
// // mustang.price = 4000;
// // console.log(mustang.price); // 4000

// //task 4
// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = `${this._value}${str}`;
//     return this._value;
//   }
//   prepend(str) {
//     this._value = `${str}${this._value}`;
//     return this._value;
//   }
//   pad(str) {
//     this._value = `${str}${this._value}${str}`;
//     return this._value;
//   }
// }
// const builder = new StringBuilder(".");
// builder.append("^");
// console.log(builder.value); // '.^'
// builder.prepend("^");
// console.log(builder.value); // '^.^'
// builder.pad("=");
// console.log(builder.value); // '=^.^='

// //task 5 - не сделано
// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor() {}

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {}

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {}

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {}

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {}

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

//module 5
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, 
        isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
  }

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this._isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    return (this._isOn = false), (this._speed = 0);
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._maxSpeed) {
      this._speed = newSpeed;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    let newSpeed = this._speed - value;
    if (newSpeed > 0) {
      this._speed = newSpeed;
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
