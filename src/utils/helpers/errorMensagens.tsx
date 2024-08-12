export const errorMessage = (field: string) => {
  return `O campo "${field}" é obrigatório`;
};

export const typeMessage = (type: string) => {
  return `Este campo só aceita ${type}`;
};
