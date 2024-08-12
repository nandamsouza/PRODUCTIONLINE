import { RegisterUser } from "../entities";
import { CoreApi } from "../shared/api";

export async function CreateUser(data:RegisterUser) {
    return await CoreApi.post("auth/register",data)
}