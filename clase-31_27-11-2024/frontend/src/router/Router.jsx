import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from "../views/Login";
import Register from "../views/Register";
import App from "../App";
import PrivateRoute from '../components/PrivateRoute';  // Ruta protegida
import PublicRoute from '../components/PublicRoute';   // Ruta pública (para login y register)

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: login */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Ruta pública: register */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Ruta protegida: home */}
        <Route
          path="/"
          element={
            <PrivateRoute> {/* Componente para proteger la ruta de home */}
              <App />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
