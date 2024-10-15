import { users } from "../data/users.js";

const getUsers = () => {
  return users;
};

const getUserByData = (data) => {
  const user = users.find((u) => u.id === data || u.name === data);
  return user;
};

// Exportación nombrada
// export { getUsers };

// Exportación por defecto
export default { getUsers, getUserByData };
