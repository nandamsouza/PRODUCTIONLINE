import { productionLine } from "../entities/production-line-entity";
import { CoreApi } from "../shared/api";

export async function UpdateLine (id:string, data: productionLine) {
    return await CoreApi.put(`production-lines/${id}`,data)
}