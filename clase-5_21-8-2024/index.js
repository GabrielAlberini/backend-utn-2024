import { readTasks, addTask, deleteTask } from "./modules.js";

const args = process.argv.splice(2);

if (args[0] === "list") {
  const response = readTasks();
  console.log(response);
} else if (args[0] === "add") {
  const response = addTask(args[1]);
  console.log(response);
} else if (args[0] === "delete") {
  const response = deleteTask(args[1]);
  console.log(response);
} else {
  console.log("Invalid argument, the correct options are: list, add or delete");
}
