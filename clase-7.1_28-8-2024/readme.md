:: Files

index.js : Inicializacion del sistema
modules.js: Crear las funcionalidades

:: Funcionalidades:

○ Ayuda sobre las funcionalidades a utilizar
○ Listar contactos: Muestra todos los contactos almacenados en el archivo JSON, con la opción de filtrar solo los contactos marcados como favoritos.
○ Agregar contacto: Permite agregar un nuevo contacto con todos los campos mencionados, realizando las siguientes validaciones:
    ■ El nombre debe contener más de 4 caracteres.
    ■ El número de teléfono debe ser solo numérico.
    ■ El email debe contener un arroba (@).
○ Eliminar contacto: Permite eliminar un contacto

Estructura de un contacto:

{
    "id": "uuid";
    "name": "contact name";
    "phone": "phone_number";
    "email": "valid email"
    "fav": true or false;
}

## comandos para ejecutar las funcionalidades

○ node index.js help: Lista la ayuda
○ node index.js list: Lista todos los contactos
○ node index.js list favoritos: Lista todos los contactos que son favoritos
○ node index.js add "Contact_name" "Phone" "Email" [favorito]: Agrega un nuevo contacto
○ node index.js delete "ID_del_Contacto": Elimina un contacto por id

