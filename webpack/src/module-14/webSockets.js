// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof "string");
// console.log(typeof 11);
// console.log(typeof true);

// console.log(undefined == false);

console.log("25px");
console.log(Number("25px"));
console.log(Number.parseFloat("25.1px"));
console.log(Number.parseInt("25.1px"));

// while(условие){
// тело
// }

// do {

// }while()

for (let i = 0; i < 5; i++) {
  console.log(`for is the best`);
}

// const a != b || c ? b + c : b - c;
// console.log(a);
// // создание нового сокета
// const webSocket = new WebSocket("ws://echo.websocket.org");

// // события сокета (4):
// // open - соединение установлено,
// // message - получены данные,
// // error - ошибка,
// // close - соединение закрыто

// webSocket.onopen = function () {
//   let msg = "Hello World!";
//   webSocket.send(msg);
// };
// webSocket.onmessage = function (e) {
//   console.log(e.data);
// };
// // методы сокета: send(data) & close([code], [reason])

// // DataView
// // Typed arrays
// // Blobs
// // Uint8ClampedArray
// console.log(webSocket.binaryType); // blob

// webSocket.binaryType = "arraybuffer";
// console.log(webSocket.binaryType); // arraybuffer

// const buffer = new ArrayBuffer(16);
// console.log(buffer); // ArrayBuffer(16)

// const arr = new Uint16Array(buffer);
// console.log(arr); // Uint8Array(6)

// webSocket.readyState;

// // example
// const messages = document.querySelector(".messages");
// const input = document.querySelector(".input");

// let newSocket = new WebSocket("ws://chat.shas.tel");

// function wait(delay) {
//   return new Promise((r) => setTimeout(r, delay));
// }

// function onOpen() {
//   newSocket.addEventListener("close", onClose);
//   newSocket.addEventListener("messages", onMessages);

//   document.addEventListener("keydown", (e) => {
//     const text = input.value;

//     if (!text) return;
//     if (e.keyCode !== 13) return;

//     const msg = {
//       from: "Max",
//       message: input.value,
//     };

//     input.value = "";

//     newSocket.send(JSON.stringify(msg));
//   });
//   input.removeAttribute("disabled");
// }

// async function onClose() {
//   newSocket.removeEventListener("open", onOpen);
//   newSocket.removeEventListener("close", onClose);
//   newSocket.addEventListener("messages", onMessages);

//   await wait(2000);

//   newSocket = new WebSocket("ws://chat.shas.tel");
//   newSocket.addEventListener("open", onOpen);
// }

// function onMessages(e) {
//   const { data } = e;

//   const msgs = JSON.parse(data);

//   const fragment = document.createDocumentFragment();

//   msgs.forEach((m) => {
//     const msgElem = document.createElement("div");
//     msgElem.innerHTML = m.message;
//     fragment.appendChild(msgElem);
//   });
//   messages.appendChild(fragment);
// }

// newSocket.addEventListener("open", onOpen);
