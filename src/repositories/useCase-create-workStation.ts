import { workstations } from "../entities/workstation-entity";
import { CoreApi } from "../shared/api";

export async function CreateWorkStation (data: workstations ) {
    return await CoreApi.post('workstations', data)
}