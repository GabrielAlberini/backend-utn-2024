import { Request, Response } from "express"
import { UserData } from "../interfaces/UserData"
import User from "../models/userModel"


const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const newUserBody: UserData = { username, password }

    const newUser = await User.register(newUserBody)
    res.json(newUser)
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as UserData

    const token = await User.login({ username, password })
    res.json({ token })
  } catch (error: any) {
    res.status(401).json({ status: 401, error: error.message });
  }
}

export { register, login }