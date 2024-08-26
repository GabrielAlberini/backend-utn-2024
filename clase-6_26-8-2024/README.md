# Consigna del Ejercicio

## Objetivo:

Desarrollar un sistema de gestión de contactos en Node.js que permita listar,
agregar, y eliminar contactos a través de la línea de comandos. Los contactos se
almacenarán en un archivo JSON y deben incluir información adicional como el número de
teléfono y la dirección de correo electrónico.
Requisitos:

### Estructura del objeto de contacto:

○ id: Identificador único (UUID).
○ nombre: Nombre completo del contacto (debe contener más de 4
caracteres).
○ telefono: Número de teléfono (debe ser solo numérico).
○ email: Dirección de correo electrónico (debe contener un arroba @).
○ favorito: Un campo booleano (true o false) que indica si el contacto es
favorito.

### Funcionalidades:

○ Listar contactos: Muestra todos los contactos almacenados en el archivo
JSON, con la opción de filtrar solo los contactos marcados como favoritos.
○ Agregar contacto: Permite agregar un nuevo contacto con todos los campos
mencionados, realizando las siguientes validaciones:
■ El nombre debe contener más de 4 caracteres.
■ El número de teléfono debe ser solo numérico.
■ El email debe contener un arroba (@).
○ Eliminar contacto: Permite eliminar un contacto por su id.

### Consideraciones:

○ Implementar validaciones para asegurarse de que el nombre, telefono, y
email cumplan con los requisitos antes de agregar un nuevo contacto.
○ El campo favorito debe ser opcional al agregar un contacto y, por defecto,
estar en false.
○ Al eliminar un contacto, debe mostrarse un mensaje de confirmación con el
nombre del contacto eliminado.

### Comandos:

○ node index.js list [favoritos]: Lista todos los contactos o solo los
favoritos si se proporciona el argumento favoritos.
○ node index.js add "Nombre del Contacto" "Telefono"
"Email" [favorito]: Agrega un nuevo contacto.
○ node index.js delete "ID_del_Contacto": Elimina un contacto por
su id.
Este ejercicio desafía a los alumnos a implementar un sistema similar al anterior, pero con
una estructura de datos más compleja y validaciones adicionales, lo que les permitirá
afianzar sus habilidades en la gestión y validación de datos en Node.js.
