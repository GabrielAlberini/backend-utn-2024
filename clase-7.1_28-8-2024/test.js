const validateEmail = (email) => {
  const arrayEmail = email.split("");
  const caracters = arrayEmail.filter((c) => c === "@");

  if (caracters.length > 1 || caracters.length === 0) return false;
  return true;
};

const length = validateEmail("gabi@gmail.com");
console.log(length);
