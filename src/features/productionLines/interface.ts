import * as yup from "yup"
import { errorMessage } from "../../utils"

export const LineSchema = yup
  .object({
    name: yup.string().required(errorMessage("Nome")),
    type: yup.string().required(errorMessage('Tipo'))
  })
  .required()

  export type typeLineSchema = yup.InferType<typeof LineSchema>