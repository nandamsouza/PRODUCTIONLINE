import { CoreApi } from "../shared/api";

export async function ListProductionLines () {
    return await CoreApi.get('production-lines')
}