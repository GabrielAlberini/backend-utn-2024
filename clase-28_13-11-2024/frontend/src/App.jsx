import { useEffect, useState } from 'react'
import { addProduct, getProducts } from './services/api.js'
import { AddProduct } from "./components/AddProduct.jsx"
import { ProductList } from "./components/ProductList.jsx"

function App() {
  const [products, setProduct] = useState([])

  const fetchProducts = async () => {
    try {
      const data = await getProducts()
      setProduct(data)
    } catch (error) {
      console.error("Error al consumir los productos:", error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const handleAddProduct = async (newProduct) => {
    try {
      const addedProduct = await addProduct(newProduct)
      setProduct((prevProducts) => [...prevProducts, addedProduct])
    } catch (error) {
      console.error("Error al guardar el producto :(")
    }
  }

  return (
    <>
      <div className='container m-5'>
        <h1 className='title is-1'>Lista de productos</h1>
        <AddProduct handleAddProduct={handleAddProduct} />
        <ProductList products={products} />
      </div>
    </>
  )
}

export default App
