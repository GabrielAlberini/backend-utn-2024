import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { authToken } = useAuth(); // Obtener el authToken desde el contexto

  if (authToken) {
    // Si ya está autenticado (hay authToken), redirige al home
    return <Navigate to="/" />;
  }

  // Si no hay token, renderiza el contenido de login o register
  return children;
};

export default PublicRoute;
