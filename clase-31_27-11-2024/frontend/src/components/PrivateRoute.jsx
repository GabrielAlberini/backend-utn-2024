import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();

  if (!authToken) {
    // Si no está autenticado, redirige a login
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
