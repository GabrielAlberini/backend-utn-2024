const _error = (id) => {
  switch (id) {
    case "invalidArgs":
      return "Invalid Arguments... (use help command)";
    case "invalidName":
      return "Name must be greater than 4 letters";
    case "invalidPhone":
      return "Invalid Phone number";
    case "invalidEmail":
      return "Invalid Email adress";
    case "invalidID":
      return "Id not found";
    case "invalidFile":
      return "File not found";
    default:
      return "Error not registered";
  }
};

export { _error };
