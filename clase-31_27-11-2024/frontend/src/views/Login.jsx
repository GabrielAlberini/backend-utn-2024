import { useEffect, useState } from "react"
import { loginUser } from "../services/auth"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await loginUser(username, password)
      console.log(response.token)
      login(response.token)
    } catch (error) {
      console.error("Error en el inicio de sesión:", error.message);
      alert(error.message);
    }
  }

  return (
    <div className="container has-text-centered p-5">
      <h1 className="title">Iniciar sesión</h1>
      <form onSubmit={handleLogin} className="box">
        <div className="field">
          <label className="label">Usuario</label>
          <div className="control">
            <input
              type="text"
              className="input"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              type="password"
              className="input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary is-fullwidth mb-3">
              Iniciar sesión
            </button>
            <a href={"/register"}>Registro</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login