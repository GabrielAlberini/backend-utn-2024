import fs from "node:fs";
import { randomUUID } from "crypto";
import { _error } from "./errors.js";

const URL_FILE = "./data/contacts.json";
const HELP_FILE = "./data/help.txt";

const readContacts = (fav) => {
  const exist = fs.existsSync(URL_FILE);

  if (!exist) {
    fs.writeFileSync(URL_FILE, JSON.stringify([]));
    return [];
  }

  if (!fav) {
    const data = fs.readFileSync(URL_FILE);
    return JSON.parse(data);
  }

  if (fav === "favoritos") {
    const data = JSON.parse(fs.readFileSync(URL_FILE));
    const dataFavs = data.filter((contact) => contact.fav === true);
    return dataFavs;
  }

  return _error("invalidArgs");
};

const addContact = (name, phone, email, fav = false) => {
  if (!name || !phone || !email) _error("invalidArgs");
  if (name.length <= 4) return _error("invalidName");
  if (isNaN(phone)) return _error("invalidPhone");
  if (!email.includes("@")) return _error("invalidEmail");

  const contact = {
    id: randomUUID(),
    name,
    phone: Number(phone),
    email: email.toLowerCase(),
    fav: fav === "favorito" && true,
  };

  const contactData = readContacts();

  contactData.push(contact);

  fs.writeFileSync(URL_FILE, JSON.stringify(contactData));

  return contact;
};

const deleteContact = (id) => {
  if (!id) return _error("invalidArgs");

  const contactData = readContacts();

  const foundContact = contactData.find((contact) => contact.id === id);

  if (!foundContact) return _error("invalidID");

  const newContacts = contactData.filter((contact) => contact.id !== id);

  fs.writeFileSync(URL_FILE, JSON.stringify(newContacts));

  return foundContact;
};

const help = () => {
  const exist = fs.existsSync(HELP_FILE);
  if (!exist) {
    return _error("invalidFile");
  } else {
    return fs.readFileSync(HELP_FILE, "utf-8");
  }
};

export { readContacts, addContact, deleteContact, help };
