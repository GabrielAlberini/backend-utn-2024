// 1 - defino que funcionalidades tendrá el usuario y las convierto a módulos
// 2 - desarrollo las funcionalidades y manipulo la data
// 3 - pienso lo que retorno en cada caso (sea de éxito o no)

// importando el módulo entero
// import fs from "node:fs";
// import crypto from "node:crypto";

// importando las funcionalidades especificas del módulo (mediante destructuring)
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomUUID } from "node:crypto";

const readContacts = () => {};

// agregar validaciones
const addContact = () => {};

const deleteContact = () => {};

export { readContacts, addContact, deleteContact };
