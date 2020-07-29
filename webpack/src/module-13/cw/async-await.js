//
const delay = (ms) => {
  return new Promise((res) => setTimeout(() => res(), ms));
};

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchTodos() {
//   console.log("Fetch todo started");
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((res) => res.json());
// }
// fetchTodos()
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// async await - обрабатывает и ждет выполнение промиса
async function fetchAsyncTodos() {
  console.log("Fetch todo started");
  try {
    await delay(2000);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log(`Выполнится в любом случае)`);
  }
}
fetchAsyncTodos();
