import { useAuth } from "./context/AuthContext";
import { ProductList } from "./components/ProductList";

const App = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout()
    alert("Sesión cerrada con éxito")
  }

  return (
    <div className="container p-5">
      <div className="columns is-centered">
        <div className="column">
          <button className="button is-danger is-fullwidth mb-5" onClick={handleLogout}>
            Cerrar sesión
          </button>
          <h1 className="title is-3 has-text-centered">Lista de productos</h1>
          <div className="box">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
