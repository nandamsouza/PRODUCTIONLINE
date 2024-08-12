import { workstations } from "../entities/workstation-entity";
import { CoreApi } from "../shared/api";

export async function UpdateWorkStation (id:string, data: workstations) {
    return await CoreApi.put(`workstations/${id}`,data)
}