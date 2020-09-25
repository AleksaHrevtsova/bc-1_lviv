// const token = "";
// const url = `https://goit-phonebook-api.herokuapp.com/contacts`;
// const headers = {
//   Authorization: `Bearer ${token}`,
// };

// const { create } = require("basiclightbox");

// // GET
// const fetchContacts = () => {
//   return fetch(url, { headers }).then((res) => res.json());
// };

// // POST
const createContact = (name, number) => {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, number }),
  };
  return fetch(url, options).then((res) => rs.json());
};

// // DELETE
// const deleteContact = (id) => {
//   const options = {
//     method: "DELETE",
//     headers,
//   };
//   return fetch(url, options).then((res) => res.json());
// };

// export default { fetchContacts, createContact, deleteContact };

// CRUD
// const refs = {
//   form: document.querySelector(".create-post-form"),
//   author: document.querySelector(".author"),
//   content: document.querySelector(".content"),
// };

// const newPost = {
//   author: "Sandra Hrevtsova",
//   content: "CRUD is awesome",
// };

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify(newPost),
// };

// console.log(
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((post) => console.log(post)),
// );

// const getUsers = async () => {
//   try {
//     const result = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(result);
//   } catch (err) {
//     throw err;
//   }
// };

// getUsers()
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error));

// refs.form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(new FormData(refs.form));
// });

// ====================
// CRUD
// create - POST: url + headers + body
// response - body + id

// READ - GET: url + headers
// response - data([], {}, text)

// update - url+ headers + body
// PUT - переписывает новые данные вместо старых
// PATCH - добавляет
// response - body + id

// DELETE - DELETE:
const url = "https://jsonplaceholder.typicode.com/users";

let respFromDB = 1;
let data = 2;
async function getData() {
  try {
    respFromDB = await fetch(url);
    console.log("response", respFromDB);
    data = respFromDB.json();
    console.log("data", data);
  } catch (err) {
    throw err;
  }
}

getData();

respFromDB = 2;

console.log(respFromDB);
console.log(data);
