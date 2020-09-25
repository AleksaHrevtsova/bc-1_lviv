import users from "../db-js/users.js";
// 1
const getUserNames = (users) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // // 2
// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter((user) => user.eyeColor === color);
// // };

// // console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// // // 3
// // const getUsersWithGender = (users, gender) => {
// //   return users.filter((elem) => elem.gender === gender);
// // };

// // console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // // 4
// // const getInactiveUsers = (users) => {
// //   return users.filter((user) => !user.isActive);
// // };

// // console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// // // 5
// // const getUserWithEmail = (users, email) => {
// //   return users.find((user) => user.email === email);
// // };

// // console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// // console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// // //  6
// // const getUsersWithAge = (users, min, max) => {
// //   return users.filter((user) => min < user.age && user.age < max);
// // };

// // console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// // console.log(getUsersWithAge(users, 30, 40));
// // // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// // //   7
// // const calculateTotalBalance = (users) => {
// //   return users.reduce((total, user) => total + user.balance, 0);
// // };

// // console.log(calculateTotalBalance(users)); // 20916

// // //   8
// // const getUsersWithFriend = (users, friendName) => {
// //   return users
// //     .filter((user) => user.friends.indexOf(friendName) !== -1)
// //     .map((user) => user.name);
// // };

// // console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// // console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // // 9
// // const getNamesSortedByFriendsCount = (users) => {
// //   return users
// //     .sort((a, b) => a.friends.length - b.friends.length)
// //     .map((user) => user.name);
// // };

// // console.log(getNamesSortedByFriendsCount(users));
// // // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // const getSortedUniqueSkills = function (users) {
// //   const temp = [];

// //   return users
// //     .reduce((acc, elem) => {
// //       acc.push(...elem.skills);
// //       return acc;
// //     }, [])
// //     .filter((item, pos, acc) => acc.indexOf(item) === pos)
// //     .sort();
// // };

// // console.log(getSortedUniqueSkills(users));
// // // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// // ================Task-01

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // ================Task-02

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// // ================Task-03

// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.name);
// };

// console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// // ================Task-04

// const getInactiveUsers = (users) => {
//   return users.filter((user) => !user.isActive);
// };

// console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// // ================Task-05

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
// console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// // ================Task-06

// const getUsersWithAge = (users, min, max) => {
//   return users.filter((user) => user.age > min && user.age < max);
// };

// console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

// // ================Task-07

// const calculateTotalBalance = (users) => {
//   return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// // ================Task-08

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter((user) => user.friends.includes(friendName))
//     .map((user) => user.name);
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // ================Task-09

// const getNamesSortedByFriendsCount = (users) => {
//   return users
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// // ================Task-10

// const getSortedUniqueSkills = (users) => {
//   return users
//     .reduce((totalSkills, user) => {
//       user.skills.forEach((oneSkill) =>
//         totalSkills.includes(oneSkill) ? "" : totalSkills.push(oneSkill)
//       );
//       return totalSkills;
//     }, [])
//     .sort();
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// console.log(users);
