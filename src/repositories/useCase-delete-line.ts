import { CoreApi } from "../shared/api";

export async function HandleDeleteLine(id: string) {
  return await CoreApi.delete(`production-lines/${id}`);
}
