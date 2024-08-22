import fs from "node:fs";
import { randomUUID } from "node:crypto";

const URL_FILE = "./data/tasks.json";

const readTasks = () => {
  const exist = fs.existsSync(URL_FILE);

  if (!exist) {
    fs.writeFileSync(URL_FILE, JSON.stringify([]));
    return [];
  }

  const data = fs.readFileSync(URL_FILE);
  return JSON.parse(data);
};

const addTask = (title) => {
  if (!title) {
    return "Title is required";
  }

  const tasks = readTasks();

  // foundTask -> {} || undefined
  const foundTask = tasks.find(
    (task) => task.title.toLowerCase() === title.toLowerCase()
  );

  if (foundTask) {
    return "Task already exists";
  }

  // const id = randomUUID();
  // const completed = true;

  // const task = { id, title, completed };

  // return task;

  const task = {
    id: randomUUID(),
    // Cuando clave -valor se llaman igual se puede abreviar
    title: title,
    completed: false,
  };

  tasks.push(task);

  fs.writeFileSync(URL_FILE, JSON.stringify(tasks));

  return task;
};

const deleteTask = (id) => {
  // validar si existe el id - check
  // validar si la tarea existe en db -
  // borrarla

  if (!id) {
    return "ID is required";
  }

  const tasks = readTasks();

  const foundTask = tasks.find((task) => task.id === id);

  if (!foundTask) {
    return "Task not found";
  }

  const newTasks = tasks.filter((task) => task.id !== id);

  fs.writeFileSync(URL_FILE, JSON.stringify(newTasks));

  return foundTask;
};

export { readTasks, addTask, deleteTask };
