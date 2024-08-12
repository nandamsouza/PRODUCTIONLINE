import { TypeAlert } from "../../widgets";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function handleErrorMessages(error: any) {
  error.message && TypeAlert(error.message, "error");
  error.response && TypeAlert(error.response.data.message, "error");
}
