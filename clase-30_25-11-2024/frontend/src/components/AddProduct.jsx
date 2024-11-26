import { useState } from "react"

const AddProduct = ({ handleAddProduct }) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newProduct = {
      name,
      description,
      price: Number(price),
      stock: Number(stock)
    }

    handleAddProduct(newProduct)
    alert("Producto agregado con éxito")

    setName("")
    setDescription("")
    setPrice("")
    setStock("")
  }


  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Ingrese el nombre del producto"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Descripción:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Ingrese la descripción del producto"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Precio:</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Ingrese el precio del producto"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Stock:</label>
          <div className="control">
            <input
              className="input"
              type="number"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
              placeholder="Ingrese el stock del producto"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button has-text-warning" type="submit">
              Agregar Producto
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export { AddProduct }