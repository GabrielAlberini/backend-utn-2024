Ejercicio de Desarrollo de Aplicación de Gestión de Productos
Descripción
En este ejercicio, crearás una aplicación de gestión de productos que permite realizar diversas operaciones sobre un inventario. La aplicación debe permitir agregar, actualizar, eliminar, listar y buscar productos. Los productos tienen propiedades como nombre, categorías (que deben ser arrays), cantidad, precio, fecha de caducidad y estado de promoción.
Requisitos
Estructura de Datos:
Cada producto debe tener un identificador único, nombre, un array de categorías, cantidad, precio, fecha de caducidad y un estado de promoción.
Funciones Principales:
Agregar Producto: Permite agregar un nuevo producto con todas las propiedades requeridas.
Actualizar Producto: Permite actualizar uno o más atributos de un producto existente.
Eliminar Producto: Permite eliminar un producto del inventario utilizando su identificador.
Listar Productos: Muestra todos los productos en el inventario.
Buscar Producto: Permite buscar productos por nombre o por alguna de las categorías.
Promover Producto: Marca un producto como promocionado.
Manejo de Errores:
Implementa un manejo básico de errores que notifique al usuario en caso de argumentos inválidos, productos no encontrados, o problemas con archivos.
Persistencia de Datos:
Los datos deben almacenarse en un archivo JSON. Asegúrate de manejar correctamente la lectura y escritura de este archivo.
Consideraciones
La aplicación debe ser capaz de leer y escribir en el archivo JSON donde se guardan los datos de los productos.
Las búsquedas deben ser insensibles a mayúsculas y minúsculas.
Las funciones deben ser modulares y reutilizables.
La interfaz de línea de comandos debe permitir al usuario ejecutar las diferentes operaciones especificadas.
