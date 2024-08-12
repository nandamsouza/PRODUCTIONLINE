import { CoreApi } from "../shared/api";

export async function ListWorkStation() {
  return await CoreApi.get("workStations");
}
