import AuthModel from "../models/AuthModel.js"

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    if (!username || !password || !email) {
      return res.status(400).json({ error: "bad request, invalid data" })
    }



    const newUser = await AuthModel.register({ username, password, email })
    if (newUser === null) {
      console.log("aca")
      return res.status(400).json({ error: "bad request" })
    }

    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "internal server error" })
  }
}

const login = (req, res) => {

}

export { register, login };
