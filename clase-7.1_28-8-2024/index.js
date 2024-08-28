import { readContacts, addContact, deleteContact, help } from "././modules.js";
import { _error } from "./errors.js";

const args = process.argv.splice(2);

const input = args[0].toLowerCase();

switch (input) {
  case "help":
    console.log(help());
    break;
  case "list":
    console.log(readContacts(args[1]));
    break;
  case "add":
    console.log(addContact(args[1], args[2], args[3], args[4]));
    break;
  case "delete":
    console.log(deleteContact(args[1]));
    break;
  default:
    console.log(_error("invalidArgs"));
}
