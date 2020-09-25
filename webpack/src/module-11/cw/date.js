// создание текущей даты
const date = new Date();
console.log(date); // Wed Aug 12 2020 04:59:24 GMT+0300 (Восточная Европа, летнее время)

// обработка строчной даты
const dateString = new Date("Jul 11, 2020");
console.log(dateString); // Sat Jul 11 2020 00:00:00 GMT+0300 (Восточная Европа, летнее время)

// аргументы new Date(year, month, date, hours, minutes, seconds, ms)
const dateWithArgs = new Date(2000, 5, 8, 12, 0, 0, 0);

// Индексы месяцев начинаются с 0, поэтому 5-й месяц это июль.
console.log(dateWithArgs); // Thu Jun 08 2000 12:00:00 GMT+0300 (Восточная Европа, летнее время)

// UNIX time
const unixDate = new Date(100000000);
console.log(unixDate); // Fri Jan 02 1970 06:46:40 GMT+0300 (Восточная Европа, стандартное время)

const dateNow = Date.now();
console.log(dateNow); // 1597197716712

// get & set Methods
const getDate = new Date();
console.log("Date: " + date);

// возвращает день месяца от 1 до 31
console.log("getDate(): " + getDate.getDate());

// возвращает день недели от 0 до 6
console.log("getDay(): " + getDate.getDay());

// возвращает месяц от 0 до 11
console.log("getMonth(): " + getDate.getMonth());

// возвращает год из 4 цифр
console.log("getFullYear(): " + getDate.getFullYear());

// возвращает час
console.log("getHours(): " + getDate.getHours());

// возвращает минуты
console.log("getMinutes(): " + getDate.getMinutes());

// возвращает секунды
console.log("getSeconds(): " + getDate.getSeconds());

// возвращает миллисекунды
console.log("getMilliseconds(): " + getDate.getMilliseconds());

// возвращает кол-во миллисекунд прошедших со старта эпохи Unix
console.log("getTime(): " + getDate.getTime());

// Для установки даты существует 2 способа. Установим 1500000000000мс
// с начала эры Unix с помощью конструктора
const setDate = new Date(2017, 6, 14, 5, 40, 0, 0);

// Проверим
console.log(`2017, 6, 14, 5, 40 соответствует ${setDate.getTime()}`);
// "2017, 6, 14, 5, 40 соответствует 1500000000000"

/* С помощью методов set */
// Создадим новый объект с текущей датой
const secondDate = new Date();

// Изменим год и в нем же месяц и день месяца
secondDate.setFullYear(2017, 6, 14);
// Изменим час и в нем же минуты, секунды и милисекунды
secondDate.setHours(5, 40, 0, 0);

// Проверим
console.log(`2017, 6, 14, 5, 40 соответствует ${secondDate.getTime()}`);
// "2017, 6, 14, 5, 40 соотвествует 1500000000000"

// date format
let formwtDate = new Date();

// формат вывода
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

// Украина
const localeUk = formwtDate.toLocaleString("Uk-uk", options);
console.log(localeUk); // середа, 12 серп. 2020 р., 05:05

// USA
const localeUs = formwtDate.toLocaleString("en-US", options);
console.log(localeUs); // Wednesday, Aug 12, 2020, 05:05 AM

// toString(), toDateString(), toTimeString() возвращают стандартное 
// строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. 
// toString() возвращает дату целиком, toDateString() и 
// toTimeString() — только дату и время соответственно.