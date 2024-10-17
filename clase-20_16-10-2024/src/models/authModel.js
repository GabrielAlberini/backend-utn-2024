import { users } from "../data/users.js";
import bcryptjs from "bcryptjs";

const findUserByEmail = (email) => {
  const existingUser = users.find((user) => user.email === email);
  return existingUser;
};

const createNewUser = async (username, email, password) => {
  const id = crypto.randomUUID();
  const alg = await bcryptjs.genSalt(10);
  const hashedPass = await bcryptjs.hash(password, alg);

  const newUser = {
    id,
    username,
    email,
    password: hashedPass,
  };

  users.push(newUser);
  return newUser;
};

const verifyPassword = async (password, userHashPassword) => {
  const isMatch = await bcryptjs.compare(password, userHashPassword);
  return isMatch;
};

export default { findUserByEmail, createNewUser, verifyPassword };
