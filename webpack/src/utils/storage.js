// Принимает ключ, по которому будет произведена выборка
const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};
// Принимает ключ и значение
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};
export default { load, save };
