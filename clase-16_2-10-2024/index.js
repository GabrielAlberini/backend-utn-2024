import express from "express";
import dotenv from "dotenv";
dotenv.config();

let cars = [
  {
    id: "e1b18c4e-83d8-4c78-87ad-ef857682b12c",
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
  },
  {
    id: "5b9a7d4f-7f6d-4c9c-8a1d-9945f8b8de1b",
    brand: "Ford",
    model: "Mustang",
    year: 2019,
  },
  {
    id: "3c7f8e29-1c9b-41e8-9d95-2e9b3429ebbb",
    brand: "Dodge",
    model: "Charger",
    year: 2021,
  },
];

const users = [];

const app = express();

// req.body -> permite que exista
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/cars", (req, res) => {
  try {
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/cars/:id", (req, res) => {
  try {
    const { id } = req.params;
    const car = cars.find((car) => car.id === id);

    if (!car) return res.status(404).json({ error: "car not found" });

    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/cars", (req, res) => {
  try {
    const { brand, model, year } = req.body;

    if (!brand || !model || !year) {
      return res.status(400).json({ error: "bad request" });
    }

    const idNewCar = crypto.randomUUID();

    const newCar = {
      id: idNewCar,
      brand,
      model,
      year,
    };

    cars.push(newCar);
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.patch("/api/cars/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { brand, model, year } = req.body;

    const car = cars.find((car) => car.id === id);

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    if (brand) car.brand = brand;
    if (model) car.model = model;
    if (year) car.year = year;

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/cars/:id", (req, res) => {
  try {
    const { id } = req.params;

    if (id.length < 36) {
      // caso incorrecto de crear un error
      // throw new Error("invalid format id");

      // caso correcto de validar el formato del id
      return res.status(400).json({ error: "bad request" });
    }

    const car = cars.find((car) => car.id === id);

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    cars = cars.filter((car) => car.id !== id);
    res.json(car);
  } catch (error) {
    // res.statusCode = 500 -> node
    // res.status(500) -> express
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/users", (req, res) => {
  res.json({ data: "obteniendo los usuarios" });
});

// Middleware
app.use("*", (req, res) => {
  res.status(404).json({ error: "resource not found" });
});

app.listen(PORT, () => {
  console.log(`Server on listening on port http://localhost:${PORT}`);
});
