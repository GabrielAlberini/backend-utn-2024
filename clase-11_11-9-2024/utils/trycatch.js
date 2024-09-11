// const dividir = (n1, n2) => {
//   if (n2 === 0) {
//     return new Error("No se puede dividir por 0");
//   }

//   const res = n1 / n2;
//   return res;
// };

// const resultado = dividir(1, 0);
// console.log(resultado);

// try -> intentar
// catch -> agarrar / capturar
// throw -> arrojar
// try catch -> "voy intentar hacer esto, si hay algún error lo capturo"
// if -> "voy a evaluar la siguiente condición, si es true, ejecuto el código"

const dividir = (n1, n2) => {
  try {
    if (n2 === 0) {
      // Creando una instancia de Error
      throw new Error("No se puede dividir por 0");
    }
    const res = n1 / n2;
    return res;
  } catch (error) {
    return error;
  }
};

const resultado = dividir(1, 0);

if (resultado instanceof Error) {
  console.error(resultado.message);
} else {
  console.log(resultado);
}
