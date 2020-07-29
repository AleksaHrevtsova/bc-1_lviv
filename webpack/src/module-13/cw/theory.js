const token = "";
const url = `https://goit-phonebook-api.herokuapp.com/contacts`;
const headers = {
  Authorization: `Bearer ${totken}`,
};

// GET
const fetchContacts = () => {
  return fetch(url, { headers }).then((res) => res.json());
};

// POST
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

// DELETE
const deleteContact = (id) => {
  const options = {
    method: "DELETE",
    headers,
  };
  return fetch(url, options).then((res) => res.json());
};

export default { fetchContacts, createContact, deleteContact };
