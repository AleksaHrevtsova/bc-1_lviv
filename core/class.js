

class ConstructorClass {
  static getInfo() {
    console.log(`This is static prop`);
  }

  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  toGetAge() {
    return console.log(this._age);
  }
  toSetAge(val) {
    return console.log((this._age = val));
  }
  get age() {
    return this._age;
  }
  set age(val) {
    return (this._age = val);
  }

  toGreet() {
    console.log(`Hello, user`);
  }
}
ConstructorClass.getInfo();

const classUser = new ConstructorClass("Bingo-Bongo", 33);
console.log(classUser);

// console.log(classUser.name);
classUser.toGetAge();
// classUser.name = "King-Kong";
// console.log(classUser.name);
classUser.toSetAge(30);

// тут работает сеттер
classUser.age = 55;

// обращение к свойству напрямую
console.log("обращение к свойству напрямую", classUser._age);
// тут - геттер
console.log("getter", classUser.age);
// classUser.age();
// console.log("getter", classUser.age);
