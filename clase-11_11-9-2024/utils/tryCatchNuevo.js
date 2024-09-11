const saludarAHumano = (nombre) => {
  try {
    if (typeof nombre !== "string") {
      throw new Error("Ingrese un nombre valido");
    }
    const saludo = "Hola " + nombre;
    return saludo;
  } catch (error) {
    return error;
  }
};

const saludoCreado = saludarAHumano(0);

if (typeof saludoCreado === "string") {
  console.log(saludoCreado);
} else {
  console.error(saludoCreado.message);
}
