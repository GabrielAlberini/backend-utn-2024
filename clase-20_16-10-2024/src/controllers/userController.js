import UserModel from "../models/userModel.js";

const getUsers = (req, res) => {
  try {
    const users = UserModel.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "internal error server" });
  }
};

const getUserByData = (req, res) => {
  try {
    const { data } = req.params;
    if (typeof data !== "string") {
      return res.status(400).json({ error: "bad request" });
    }
    const user = UserModel.getUserByData(data);
    if (!user) {
      return res.status(404).json({ error: "not found user" });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: "internal error server" });
  }
};

export { getUsers, getUserByData };
