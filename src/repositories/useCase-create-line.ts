import { productionLine } from "../entities/production-line-entity";
import { CoreApi } from "../shared/api";

export async function CreateLine (data: productionLine) {
    return await CoreApi.post('production-lines',data)
}