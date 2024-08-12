import { CoreApi } from "../shared/api";

export async function DeleteWorkStation(rowId:string) {
    return await CoreApi.delete(`workstations/${rowId}`)
}