import axios from "axios";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:5555/api/users/login", { username, password });
    return response.data;
  } catch (error) {
    throw new Error("Credenciales inválidas");
  }
};

export const registerUser = async (username, password) => {
  try {
    await axios.post("http://localhost:5555/api/users/register", { username, password });
    location.href = "/login"
  } catch (error) {
    throw new Error("Error al registrar usuario");
  }
};
