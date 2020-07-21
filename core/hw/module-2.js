// 1
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// 2
const calculateEngravingPrice = function (message, pricePerWord) {
  let words = message.split(" ");
  return words.length * pricePerWord;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

// 3

const findLongestWord = function (string) {
  const wordSplit = string.split(" ");
  let longestWord = wordSplit[0];
  // 1
  // for (const word of wordSplit) {
  //   if (word.length > longestWord.length) {
  //     longestWord = word;
  //   }
  // }

  // 2
  for (let i = 1; i < wordSplit.length; i += 1) {
    if (longestWord.length < wordSplit[i].length) {
      longestWord = wordSplit[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'

// 4
const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + "...";
};

// const formatString = function (string) {
//   if (string.length < 40) {
//     return string;
//   }
//   if (string.length > 40) {
//     string = string.split("").slice(0, 39).join("");
//     return `${string} ...`;
//   }
// };

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок
console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// повернеться форматований рядок

// 5
// ========================================
// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   let spamCheker = false;
//   if (message.includes("spam") || message.includes("sale")) {
//     spamCheker = true;
//   }
//   return spamCheker;
// };
// ========================================
// const checkForSpam = function (message) {
//   let rezult;
//   if (message.toLowerCase().includes("[spam]") || message.includes("sale")) {
//     rezult = "find";
//   } else {
//     rezult = "not found";
//   }
//   return rezult;
// };
// ========================================
const checkForSpam = function (message) {
  let normalizeMessage = message.toLowerCase();
  if (normalizeMessage.includes("spam") || normalizeMessage.includes("sale")) {
    return true;
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// // 6
// let input;
// const numbers = [];
// let total = 0;

// while (input !== null) {
//   input = prompt("Enter your numb");
//   if (isNaN(input)) {
//     alert("This is not a number");
//     continue;
//   }
//   if (input === null) {
//     if (numbers.length > 0) {
//       for (let number of numbers) {
//         total += number;
//       }
//       console.log(`Загальна сума чисел дорівнює ${total}`);
//       // continue;
//     } else {
//       console.log(`Користувач не ввів жодного числа`);
//     }
//   }
//   numbers.push(Number(input));
// }

// 7

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  return login.length >= 4 && login.length <= 16;
};

const isLoginUnique = function (allLogins, login) {
  return !allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login))
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  if (!isLoginUnique(allLogins, login)) return "Такий логін вже використовується!";
  return "Логін успішно доданий!";
};

console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
