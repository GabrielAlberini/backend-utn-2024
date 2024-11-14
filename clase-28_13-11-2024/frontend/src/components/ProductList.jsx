const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="columns is-multiline">
        {products.map((product, index) => (
          <div key={index} className="column is-one-third">
            <div className="card">
              <div className="card-content">
                <p className="title">{product.name}</p>
                <p className="subtitle">{product.description}</p>
                <div className="content">
                  <strong>Price:</strong> ${product.price}
                  <br />
                  <strong>Stock:</strong> {product.stock} available
                </div>
              </div>
              <footer className="card-footer">
                <a href="#" className="card-footer-item">
                  Add to Cart
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { ProductList };
