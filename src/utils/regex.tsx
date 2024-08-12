export const regex = {
  regexCpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  regexEmail: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
  regexPhone: /^(\(\d{2}\)\s?)?\d{5}-\d{4}$/,
  regexCar: /^[A-Z]{2}-\d{7}-([A-Z0-9]{4}\.){7}[A-Z0-9]{4}$/,
  regexPassword:
    /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?!.*\s).{8,70}$/,
  regexSpaces: /^\s*$/, // verifica se o valor contém apenas espaços
  regexSpecialChars: /^[^A-Za-z0-9]+$/, // verifica se o valor contém apenas caracteres especiais
  regexZeros: /^0+$/, // verifica se o valor contém apenas zeros
};
