import * as yup from "yup"
import { errorMessage } from "../../utils"

export const workStationSchema = yup
  .object({
    name: yup.string().required(errorMessage("Nome")),
    type: yup.string().required(errorMessage('Tipo')),
    productionLineId: yup.string().required(errorMessage("Linha"))
  })
  .required()

  export type typeWorkStationSchema = yup.InferType<typeof workStationSchema>