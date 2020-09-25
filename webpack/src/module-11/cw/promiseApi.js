const delay = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

const logger = (time) => console.log(`Resolved after ${time} ms`);

// Виклич функції для перевірки
delay(4000).then(logger).catch().finally(); // Resolved after 2000ms
delay(3000).then(logger); // Resolved after 1000ms
delay(2000).then(logger); // Resolved after 1500ms

const users = [
  { name: "User1", student: true },
  { name: "User2", student: false },
  { name: "User3", student: true },
  { name: "User4", student: true },
];

const toggleUserState = (arr, name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const students = arr.map((user) =>
        user.name === name ? { ...user, student: !user.student } : user,
      );
      resolve(students);
    }, 0);
  });
};

const showStudents = (students) => console.log(students);

toggleUserState(users, "User3").then(showStudents);
toggleUserState(users, "User4").then(showStudents);
toggleUserState(users, "User").then(showStudents);
