const userList = document.getElementById("userList");

// Función para obtener todos los usuarios por defecto
const fetchUsers = () => {
  fetch("http://localhost:65000/api/users")
    .then((response) => response.json())
    .then((users) => {
      displayUsers(users); // Mostrar la lista de usuarios
    })
    .catch((error) => console.error("Error fetching users:", error));
};

// Función para obtener un usuario por ID
const fetchUser = () => {
  const userId = document.getElementById("userId").value;

  // Si no se ingresa ningún ID, mostrar todos los usuarios
  if (!userId) {
    fetchUsers();
    return;
  }

  fetch(`http://localhost:65000/api/users/${userId}`)
    .then((response) => {
      if (response.status === 404) {
        alert("Usuario no encontrado");
        return [];
      }
      return response.json();
    })
    .then((user) => {
      if (Array.isArray(user)) {
        displayUsers(user);
      } else {
        displayUsers([user]); // Mostrar solo el usuario encontrado
      }
    })
    .catch((error) => console.error("Error fetching user:", error));
};

// Función para mostrar los usuarios en la lista
const displayUsers = (users) => {
  userList.innerHTML = ""; // Limpiar la lista

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`;
    userList.appendChild(li);
  });
};

// Cargar todos los usuarios al cargar la página
window.onload = fetchUsers;
