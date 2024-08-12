import * as yup from "yup";
import { errorMessage, regex } from "../../utils";

export const schemaLogin = yup
  .object({
    email: yup
      .string()
      .required(errorMessage("Email"))
      .matches(
        regex.regexEmail,
        "Por favor, insira um formato de e-mail válido"
      ),
    password: yup
      .string()
      .required(errorMessage("Senha"))
      .min(6, "a senha deve ter no minímo 6 digitos"),
  })
  .required();

export type typeLoginForm = yup.InferType<typeof schemaLogin>;
