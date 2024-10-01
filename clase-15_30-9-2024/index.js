import express from "express";

let users = [
  { id: "1", name: "John Doe", age: 25 },
  { id: "2", name: "Jane Smith", age: 30 },
];

const app = express();
// Middleware, permite el envio de datos al servidor mediante la req
app.use(express.json());

// get all users
app.get("/api/users", (req, res) => {
  try {
    res.json(users);
  } catch (error) {
    res.json({
      error: 500,
      message: error.message,
    });
  }
});

// get an user
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (!user) return res.json({ error: 404 });
  res.json(user);
});

// create an user
app.post("/api/users", (req, res) => {
  const { name, age } = req.body;
  const newId = Number(users[users.length - 1].id) + 1;
  const newUser = {
    id: String(newId),
    name,
    age,
  };
  users.push(newUser);
  res.json({ name, age });
});

// update an user
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (!user) return res.json({ eror: 404 });
  if (name) user.name = name;
  if (age) user.age = age;
  res.json(user);
});

// delete an user
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  if (!user) return res.json({ error: 404 });
  users = users.filter((user) => user.id !== id);
  res.json(user);
});

app.listen(1234, () => {
  console.log(`Server on http://localhost:1234`);
});
