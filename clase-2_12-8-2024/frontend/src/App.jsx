// hook -> anzuelo / gancho
import { useState, useEffect } from "react";
import "./App.css";

// const PRODUCTS = [
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
//   {
//     id: 15,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
// ];

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Tienda Los Soles</h1>
      <article>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default App;
